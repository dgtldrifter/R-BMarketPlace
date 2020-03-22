import React, {Component} from 'react';
import axios from 'axios';

var loadjs = require('loadjs');

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      posts: [],
      name0: '',
      name1: '',
      name2: '',
      name3: '',
      name4: '',
      name5: '',
      name6: '',
      name7: '',
      name8: '',
      name9: '',
      price0: '',
      price1: '',
      price2: '',
      price3: '',
      price4: '',
      price5: '',
      price6: '',
      price7: '',
      price8: '',
      price9: '',
      image0: '',
      image7: '',
      image9: ''
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
        posts: response.data,
        name0:  response.data[0].name,
        name1:  response.data[1].name,
        name2:  response.data[2].name,
        name3:  response.data[3].name,
        name4:  response.data[4].name,
        name5:  response.data[5].name,
        name6:  response.data[6].name,
        name7:  response.data[7].name,
        price0: response.data[0].price,
        price1: response.data[1].price,
        price2: response.data[2].price,
        price3: response.data[3].price,
        price4: response.data[4].price,
        price5: response.data[5].price,
        price6: response.data[6].price,
        price7: response.data[7].price,
        image0: response.data[0].image,
        image1: response.data[1].image,
        image2: response.data[2].image,
        image3: response.data[3].image,
        image4: response.data[4].image,
        image5: response.data[5].image,
        image6: response.data[6].image,
        image7: response.data[7].image
      }); 
    }).catch((error) => {
      this.setState({
        isLoaded: true,
        error
      });
    });
  }

  render() {
    const { error, isLoaded } = this.state;
    const postItems = this.state.posts.map((post) => 
      <li key={post._id}>{post.name}</li>
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
                      <li data-filter=".filter-coffee-appliances">Coffee Appliances</li>
                      <li data-filter=".filter-cooking-appliances">Cooking Appliances</li>
                      <li data-filter=".filter-silverware">Silverware</li>
                    </ul>
                  </div>
                </div>
                <div className="row portfolio-container">
                  <div className="col-lg-4 col-md-6 portfolio-item filter-cooking-appliances">
                    <div className="portfolio-wrap">h
                      <img src={this.state.image0} className="img-fluid" alt={this.state.name0} />
                      <div className="portfolio-info">
                        <h4>{this.state.name0}</h4>
                        <p>${this.state.price0}</p>
                      </div>
                      <div className="portfolio-links">
                        <a href={this.state.image0} data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-plus"></i></a>
                        <a href="/" title="More Details"><i className="bx bx-link"></i></a> 
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-coffee-appliances">
                    <div className="portfolio-wrap">
                      <img src={this.state.image1} className="img-fluid" alt={this.state.name1} />
                      <div className="portfolio-info">
                        <h4>{this.state.name1}</h4>
                        <p>${this.state.price1}</p>
                      </div>
                      <div className="portfolio-links">
                        <a href={this.state.image1} data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-plus"></i></a>
                        <a href="/" title="More Details"><i className="bx bx-link"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-cooking-appliances">
                    <div className="portfolio-wrap">
                      <img src={this.state.image4} className="img-fluid" alt={this.state.name4} />
                      <div className="portfolio-info">
                        <h4>{this.state.name4}</h4>
                        <p>${this.state.price4}</p>
                      </div>
                      <div className="portfolio-links">
                        <a href={this.state.image4} data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-plus"></i></a>
                        <a href="/" title="More Details"><i className="bx bx-link"></i></a> 
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-coffee-appliances">
                    <div className="portfolio-wrap">
                      <img src={this.state.image2} className="img-fluid" alt={this.state.name2} />
                      <div className="portfolio-info">
                        <h4>{this.state.name2}</h4>
                        <p>${this.state.price2}</p>
                      </div>
                      <div className="portfolio-links">
                        <a href={this.state.image2} data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-plus"></i></a>
                        <a href="/" title="More Details"><i className="bx bx-link"></i></a> 
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-silverware">
                    <div className="portfolio-wrap">
                      <img src={this.state.image7} className="img-fluid" alt={this.state.name7} />
                      <div className="portfolio-info">
                        <h4>{this.state.name7}</h4>
                        <p>${this.state.price7}</p>
                      </div>
                      <div className="portfolio-links">
                        <a href={this.state.image7} data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-plus"></i></a>
                        <a href="/" title="More Details"><i className="bx bx-link"></i></a> 
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-coffee-appliances">
                    <div className="portfolio-wrap">
                      <img src={this.state.image3} className="img-fluid" alt={this.state.name3} />
                      <div className="portfolio-info">
                        <h4>{this.state.name3}</h4>
                        <p>${this.state.price3}</p>
                      </div>
                      <div className="portfolio-links">
                        <a href={this.state.image3} data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-plus"></i></a>
                        <a href="/" title="More Details"><i className="bx bx-link"></i></a> 
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-silverware">
                    <div className="portfolio-wrap">
                      <img src={this.state.image6} className="img-fluid" alt={this.state.name6} />
                      <div className="portfolio-info">
                        <h4>{this.state.name6}</h4>
                        <p>${this.state.price6}</p>
                      </div>
                      <div className="portfolio-links">
                        <a href={this.state.image6} data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-plus"></i></a>
                        <a href="/" title="More Details"><i className="bx bx-link"></i></a> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </section>
          </main>
          <a href="#" className="back-to-top"><i className="icofont-simple-up"></i></a>
        </div>
      );
    }
  }
}

export default HomePage;
