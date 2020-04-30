import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
var loadjs = require('loadjs');

class UserPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      userPosts: []
    };
  } 

  axiosRequest(){
    axios({
      method: 'POST',
      url: '../../posts/ownerPosts',
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        email: localStorage.getItem('userEmail')
      }
    }).then((response) => {
      this.setState({
        isLoaded: true,
        userPosts: response.data
      }); 
    }).catch((error) => {
      //RE-Direct home if you don't exist
      window.location.href = '/';
      this.setState({
        isLoaded: true,
        error
      });
    });
  }

  componentDidMount() {
    loadjs('../../main.js');
    this.setState({
      fullName: localStorage.getItem('fullName'),
      email: localStorage.getItem('userEmail')
    });
    this.axiosRequest();
  }

  componentDidUpdate() {
    //After deleting post the page will update
    this.axiosRequest();
  }

  onDeleteClick(e) {
    axios({
      method: 'POST',
      url: 'posts/deletePost',
      headers: {
        "Content-Type": "application/json",
        ObjectID: e.target.value
      }
    }).then((response) => {
      
    }).catch((error) => {
      
    });
  }

  render() {
    const { error, isLoaded } = this.state;
    if(error) {
      return <div>Error: {error.message}</div>;
    } else if(!isLoaded) {
      return <div>Loading ... </div>;
    } else {
      const posts = this.state.userPosts.map((post) => 
        <div key={post._id} className="col-lg-4 col-md-6 portfolio-item filter-transportation">
          <div className="portfolio-wrap">
            <img src={post.image} className="img-fluid" alt={post.name} />
            <div className="portfolio-info">
              <h4>{post.name}</h4>
              <p>${post.price}</p>
            </div>
            <div className="portfolio-links">
              <a href={post.image} data-gall="portfolioGallery" className="venobox" title={post.name}><i className="bx bx-plus"></i></a>
              <Link to={"/Product/" + post._id}><i className="bx bx-link"></i></Link>
              <Link style={editButton} to={"/EditPost/" + post._id}>Edit</Link>
              <button value={post._id} className="deleteButton" onClick={e => this.onDeleteClick(e, "value")}>Delete</button>
            </div>
          </div>
        </div>
      );

      return (
        <div>
          <main id="main">
            <section id="portfolio" className="portfolio section-bg">
              <div className="container">
                <div className="section-title">
                    <div style={{textAlign: "center", fontFamily: 'Cabin'}}>
                      <i className="bx bx-user-circle" style={{ fontSize: "150px", color: "#013280"}}></i>
                      <h1 style={{fontSize: "80px"}}>Welcome {this.state.fullName}</h1>
                      <h2>{this.state.email}</h2>
                    </div>
                </div>
                <div className="row portfolio-container" style={{paddingTop: "50px"}}>
                  {posts}
                </div>
              </div>
            </section>
          </main>
        </div>        
      );
    }
  }
}

const editButton = {
  textDecoration: 'none', 
  fontSize: '20px'
}

export default UserPage;