import React, {Component} from 'react';
import axios from 'axios';

var loadjs = require('loadjs');

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      name0: '',
      name1: '',
      name2: '',
      name3: '',
      name4: '',
      name5: '',
      name6: '',
      price0: '',
      price1: '',
      price2: '',
      price3: '',
      price4: '',
      price5: '',
      price6: ''
    };
  } 

  componentDidMount() {
    loadjs('main.js');
    axios({
      method: 'POST',
      url: 'posts/getAll',
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      this.setState({
        isLoaded: true,
        name0: response.data[0].name,
        name1: response.data[1].name,
        name2: response.data[2].name,
        name3: response.data[3].name,
        name4: response.data[4].name,
        name5: response.data[5].name,
        name6: response.data[6].name,
        price0: response.data[0].price,
        price1: response.data[1].price,
        price2: response.data[2].price,
        price3: response.data[3].price,
        price4: response.data[4].price,
        price5: response.data[5].price,
        price6: response.data[6].price
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
                  <div className="col-lg-4 col-md-6 portfolio-item filter-coffee-appliances">
                    <div className="portfolio-wrap">
                      <img src="img/portfolio/portfolio-1.jpg" className="img-fluid" alt={this.state.name1} />
                      <div className="portfolio-info">
                        <h4>{this.state.name0}</h4>
                        <p>${this.state.price0}</p>
                      </div>
                    <div className="portfolio-links">
                      <a href="img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-plus"></i></a>
                      {/* <a href="/" title="More Details"><i className="bx bx-link"></i></a> */}
                    </div>
                  </div>
                </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-cooking-appliances">
                    <div className="portfolio-wrap">
                      <img src="img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
                      <div className="portfolio-info">
                        <h4>{this.state.name1}</h4>
                        <p>${this.state.price1}</p>
                      </div>
                      <div className="portfolio-links">
                        <a href="img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus"></i></a>
                        {/* <a href="/" title="More Details"><i className="bx bx-link"></i></a> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-silverware">
                    <div className="portfolio-wrap">
                      <img src="img/portfolio/portfolio-5.jpg" className="img-fluid" alt=""/>
                      <div className="portfolio-info">
                        <h4>{this.state.name2}</h4>
                        <p>${this.state.price2}</p>
                      </div>
                      <div className="portfolio-links">
                        <a href="img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" className="venobox" title="Web 2"><i className="bx bx-plus"></i></a>
                        {/* <a href="/" title="More Details"><i className="bx bx-link"></i></a> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-coffee-appliances">
                    <div className="portfolio-wrap">
                      <img src="img/portfolio/portfolio-6.jpg" className="img-fluid" alt=""/>
                      <div className="portfolio-info">
                        <h4>{this.state.name3}</h4>
                        <p>${this.state.price3}</p>
                      </div>
                      <div className="portfolio-links">
                        <a href="img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" className="venobox" title="App 3"><i className="bx bx-plus"></i></a>
                        {/* <a href="/" title="More Details"><i className="bx bx-link"></i></a> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-cooking-appliances">
                    <div className="portfolio-wrap">
                      <img src="img/portfolio/portfolio-7.jpg" className="img-fluid" alt=""/>
                      <div className="portfolio-info">
                        <h4>{this.state.name4}</h4>
                        <p>${this.state.price4}</p>
                      </div>
                      <div className="portfolio-links">
                        <a href="img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" className="venobox" title="Card 1"><i className="bx bx-plus"></i></a>
                        {/* <a href="/" title="More Details"><i className="bx bx-link"></i></a> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-silverware">
                    <div className="portfolio-wrap">
                      <img src="img/portfolio/portfolio-8.jpg" className="img-fluid" alt=""/>
                      <div className="portfolio-info">
                        <h4>{this.state.name5}</h4>
                        <p>${this.state.price5}</p>
                      </div>
                      <div className="portfolio-links">
                        <a href="img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" className="venobox" title="Card 3"><i className="bx bx-plus"></i></a>
                        {/* <a href="/" title="More Details"><i className="bx bx-link"></i></a> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-coffee-appliances">
                    <div className="portfolio-wrap">
                      <img src="img/portfolio/portfolio-9.jpg" className="img-fluid" alt=""/>
                      <div className="portfolio-info">
                        <h4>{this.state.name6}</h4>
                        <p>${this.state.price6}</p>
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