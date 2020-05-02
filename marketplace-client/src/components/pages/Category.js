import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
var loadjs = require('loadjs');

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.category,
      categoryExtra: this.props.categoryExtra,
      search: '',
      error: null,
      isLoaded: false,
      posts: []
    };
  } 

  axiosRequest(){
    axios({
      method: 'POST',
      url: '../../posts/filterPosts',
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        categoryid: this.props.categoryExtra,
        saletype: this.props.category
      }
    }).then((response) => {
      this.setState({
        isLoaded: true,
        posts: response.data
      }); 
    }).catch((error) => {
      //RE-Direct home if Error is thrown
      window.location.href = '/';
      this.setState({
        isLoaded: true,
        error
      });
    });

  }

  componentDidMount() {
    this.axiosRequest();
    
  }

  componentDidUpdate() {
    //Update Category State on Page Change
    if(this.state.category !== this.props.category || this.state.categoryExtra !== this.props.categoryExtra){
      this.setState({
        category: this.props.category,
        categoryExtra: this.props.categoryExtra
      });
      //Now that User has changed page, call fiterPosts again
      this.axiosRequest();
    }
  }

  render() {
    const { error, isLoaded } = this.state;
    if(error) {
      return <div>Error: {error.message}</div>;
    } else if(!isLoaded) {
      return <div>Loading ... </div>;
    } else {
      
      const posts = this.state.posts.map((post) => 
        <div key={post._id} className="col-lg-4 col-md-6 portfolio-item filter-transportation">
          <div className="portfolio-wrap">
            <img src={post.image} style={sameSize} className="img-fluid" alt={post.name} />
            <div className="portfolio-info">
              <h4>{post.name}</h4>
              <p>${post.price}</p>
            </div>
            <div className="portfolio-links">
              <a href={post.image} data-gall="portfolioGallery" className="venobox" title={post.name}><i className="bx bx-plus"></i></a>
              <Link to={"/Product/" + post._id}><i className="bx bx-link"></i></Link>
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
                    <h1>{this.state.category}   <i className="bx bx-link"></i>  {this.state.categoryExtra}</h1>
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

const sameSize = {
  height: '250px', 
  overflow: 'hidden'
}

export default Category;