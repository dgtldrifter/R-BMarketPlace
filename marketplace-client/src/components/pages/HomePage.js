import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

var loadjs = require('loadjs');

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      posts: []
    };
  } 

  componentDidMount() {
    loadjs('main.js');
    if(localStorage.getItem('token') !== null) {
      axios({
        method: 'POST',
        url: 'users/authToken',
        headers: {
            "Content-Type": "application/json",
            'token': localStorage.getItem('token')
        }
      }).then((response) => {
        
      }).catch((error) => {
          console.log(error);
      });
    } else {
      localStorage.clear();
    }

    axios({
      method: 'POST',
      url: 'posts/getAll',
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      this.setState({
        isLoaded: true,
        posts: response.data
      }); 
    }).catch((error) => {
      this.setState({
        isLoaded: true,
        error
      });
    });
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
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    const { error, isLoaded } = this.state;
    const postItemsFurniture = this.state.posts.slice(12, 15).map((post) => 
      <div key={post._id} className="col-lg-4 col-md-6 portfolio-item filter-furniture">
        <div className="portfolio-wrap">
          <img src={post.image} className="img-fluid" alt={post.name} />
          <div className="portfolio-info">
            <h4>{post.name}</h4>
            <p>${post.price}</p>
          </div>
          <div className="portfolio-links">
            <a href={post.image} data-gall="portfolioGallery" className="venobox" title={post.name}><i className="bx bx-plus"></i></a>
            <a href="/" title="More Details"><i className="bx bx-link"></i></a>
            <Link style={editButton} to={"/EditPost/" + post._id}>Edit</Link>
            <button className="btn btn-danger" value={post._id} onClick={e => this.onDeleteClick(e, "value")}>Delete</button>
          </div>
        </div>
      </div>
    );
    const postItemsTransportation = this.state.posts.slice(9, 12).map((post) => 
      <div key={post._id} className="col-lg-4 col-md-6 portfolio-item filter-transportation">
        <div className="portfolio-wrap">
          <img src={post.image} className="img-fluid" alt={post.name} />
          <div className="portfolio-info">
            <h4>{post.name}</h4>
            <p>${post.price}</p>
          </div>
          <div className="portfolio-links">
            <a href={post.image} data-gall="portfolioGallery" className="venobox" title={post.name}><i className="bx bx-plus"></i></a>
            <a href="/" title="More Details"><i className="bx bx-link"></i></a>
            <Link style={editButton} to={"/EditPost/" + post._id}>Edit</Link>
            <button className="btn btn-danger" value={post._id} style={deleteButton} onClick={e => this.onDeleteClick(e, "value")}>Delete</button>
          </div>
        </div>
      </div>
    );
    const postItemsCooking = this.state.posts.slice(1, 4).map((post) => 
      <div key={post._id} className="col-lg-4 col-md-6 portfolio-item filter-cooking-appliances">
        <div className="portfolio-wrap">
          <img src={post.image} className="img-fluid" alt={post.name} />
          <div className="portfolio-info">
            <h4>{post.name}</h4>
            <p>${post.price}</p>
          </div>
          <div className="portfolio-links">
            <a href={post.image} data-gall="portfolioGallery" className="venobox" title={post.name}><i className="bx bx-plus"></i></a>
            <a href="/" title="More Details"><i className="bx bx-link"></i></a>
            <Link style={editButton} to={"/EditPost/" + post._id}>Edit</Link>
            <button className="btn btn-danger" value={post._id} style={deleteButton} onClick={e => this.onDeleteClick(e, "value")}>Delete</button>
          </div>
        </div>
      </div>
    );
    if(error) {
      return <div>Error: {error.message}</div>;
    } else if(!isLoaded) {
      return <div>Loading ... </div>;
    } else {
      return (
        <div>
          <main id="main">
            <section id="portfolio" className="portfolio section-bg">
              <div className="container">
                <div className="section-title">
                  <h2>Hottest Products</h2>
                </div>
                <div className="row">
                  <div className="col-lg-12 d-flex justify-content-center">
                    <ul id="portfolio-flters">
                      <li data-filter="*" className="filter-active">All</li>
                      <li data-filter=".filter-cooking-appliances">Coffee Appliances</li>
                      <li data-filter=".filter-transportation">Transportation</li>
                      <li data-filter=".filter-furniture">Furniture</li>
                    </ul>
                  </div>
                </div>
                <div className="row portfolio-container">
                  {postItemsCooking}
                  {postItemsTransportation}
                  {postItemsFurniture}
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

const deleteButton = {
  textDecoration: 'none'
}

export default HomePage;
