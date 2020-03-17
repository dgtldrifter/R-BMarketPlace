import React, {Component} from 'react';
import Axios from 'axios';

var loadjs = require('loadjs');

var name1 = "";
var name2 = "";

class HomePage extends Component {
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
    Axios({
      method: 'POST',
      url: 'posts/getAll',
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      this.setState({
        isLoaded: true,
        posts: response
      }); 
      name1 = this.state.posts.data[0].name 
    }).catch((error) => {
      this.setState({
        isLoaded: true,
        error
      });
    });
  }

  render() {
    const { error, isLoaded } = this.state;
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
                      <li data-filter=".filter-app">Coffee Appliances</li>
                      <li data-filter=".filter-card">Cooking Appliances</li>
                      <li data-filter=".filter-web">Silverware</li>
                    </ul>
                  </div>
                </div>
                <div className="row portfolio-container">
                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                      <img src="img/portfolio/portfolio-1.jpg" className="img-fluid" alt={name1}/>
                      <div className="portfolio-info">
                        <h4>{name1}</h4>
                        <p>App</p>
                      </div>
                    <div className="portfolio-links">
                      <a href="img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-plus"></i></a>
                      {/* <a href="/" title="More Details"><i className="bx bx-link"></i></a> */}
                    </div>
                  </div>
                </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap">
                      <img src="img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
                      <div className="portfolio-info">
                        <h4>{name2}</h4>
                        <p>Web</p>
                      </div>
                      <div className="portfolio-links">
                        <a href="img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus"></i></a>
                        {/* <a href="/" title="More Details"><i className="bx bx-link"></i></a> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap">
                      <img src="img/portfolio/portfolio-5.jpg" className="img-fluid" alt=""/>
                      <div className="portfolio-info">
                        <h4>Web 2</h4>
                        <p>Web</p>
                      </div>
                      <div className="portfolio-links">
                        <a href="img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" className="venobox" title="Web 2"><i className="bx bx-plus"></i></a>
                        {/* <a href="/" title="More Details"><i className="bx bx-link"></i></a> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                      <img src="img/portfolio/portfolio-6.jpg" className="img-fluid" alt=""/>
                      <div className="portfolio-info">
                        <h4>App 3</h4>
                        <p>App</p>
                      </div>
                      <div className="portfolio-links">
                        <a href="img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" className="venobox" title="App 3"><i className="bx bx-plus"></i></a>
                        {/* <a href="/" title="More Details"><i className="bx bx-link"></i></a> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <div className="portfolio-wrap">
                      <img src="img/portfolio/portfolio-7.jpg" className="img-fluid" alt=""/>
                      <div className="portfolio-info">
                        <h4>Card 1</h4>
                        <p>Card</p>
                      </div>
                      <div className="portfolio-links">
                        <a href="img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" className="venobox" title="Card 1"><i className="bx bx-plus"></i></a>
                        {/* <a href="/" title="More Details"><i className="bx bx-link"></i></a> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <div className="portfolio-wrap">
                      <img src="img/portfolio/portfolio-8.jpg" className="img-fluid" alt=""/>
                      <div className="portfolio-info">
                        <h4>Card 3</h4>
                        <p>Card</p>
                      </div>
                      <div className="portfolio-links">
                        <a href="img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" className="venobox" title="Card 3"><i className="bx bx-plus"></i></a>
                        {/* <a href="/" title="More Details"><i className="bx bx-link"></i></a> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap">
                      <img src="img/portfolio/portfolio-9.jpg" className="img-fluid" alt=""/>
                      <div className="portfolio-info">
                        <h4>Web 3</h4>
                        <p>Web</p>
                      </div>
                      <div className="portfolio-links">
                        <a href="img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus"></i></a>
                        {/* <a href="/" title="More Details"><i className="bx bx-link"></i></a> */}
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