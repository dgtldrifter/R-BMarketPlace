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

  render() {
    loadjs('main.js');
    const { error, isLoaded } = this.state;
    const other = this.state.posts.slice(0, 3).map((post) => 
      <div key={post._id} className="col-lg-4 col-md-6 portfolio-item filter-random">
        <div className="portfolio-wrap">
          <img src={post.image} className="img-fluid" alt={post.name} />
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
    const postItemsRealEstate = this.state.posts.slice(4, 10).map((post) => 
      <div key={post._id} className="col-lg-4 col-md-6 portfolio-item filter-realestate">
        <div className="portfolio-wrap">
          <img src={post.image} className="img-fluid" alt={post.name} />
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
                      <li data-filter=".filter-realestate">Real Estate</li>
                      <li data-filter=".filter-random">Other</li>
                    </ul>
                  </div>
                </div>
                <div className="row portfolio-container">
                  {other}
                  {postItemsRealEstate}
                </div>
              </div>
            </section>
          </main>
        </div>
      );
    }
  }
}

export default HomePage;
