import React, {Component} from 'react';
import {Parallax} from 'react-parallax';
import {Link} from 'react-router-dom';

const styling = {
    opacity: .8,
}

var loadjs = require('loadjs');



const homeImage = "https://images.unsplash.com/photo-1502252430442-aac78f397426?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";

const homeImage2 = "https://images.unsplash.com/photo-1464082354059-27db6ce50048?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";

const homeImage3= "../houses-banner.jfif";

class HomePage extends Component {


    componentDidMount() {
        loadjs('main.js');
    }

    render() {
        return (
            <div>
                <div id="banner">
                <Parallax bgImage={homeImage3} style={styling} strength={450} onScroll={this.handleScroll}>
                    <div id="scrollHeader">
                        <h1 className="title">R&amp;B Market Place</h1>
                    </div>
                </Parallax>
                </div>
                <div id="header">
                <div class="container d-flex">
                  <div class="logo mr-auto">
                    <a href="#banner"><img src="img/logo.jpg" alt="" class="img-fluid"/></a>
                  </div>
                  <nav class="nav-menu d-none d-lg-block">
                    <ul>
                      <li class="active"><a href="#banner">Home</a></li>
                      <li><a href="#main">Products and Properties</a></li>
                      <li><Link to="/signup">Sign Up</Link></li>
                      <li><a href="#">Link</a></li>
                      <li><a href="#header">Link</a></li>
                      <li class="drop-down"><a href="">Drop Down</a>
                        <ul>
                          <li><a href="#">Drop Down 1</a></li>
                          <li class="drop-down"><a href="#">Drop Down 2</a>
                            <ul>
                              <li><a href="#">Deep Drop Down 1</a></li>
                              <li><a href="#">Deep Drop Down 2</a></li>
                              <li><a href="#">Deep Drop Down 3</a></li>
                              <li><a href="#">Deep Drop Down 4</a></li>
                              <li><a href="#">Deep Drop Down 5</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Drop Down 3</a></li>
                          <li><a href="#">Drop Down 4</a></li>
                          <li><a href="#">Drop Down 5</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Link</a></li>
                    </ul>
                  </nav>
                </div>
              </div>

          <main id="main">
            <section id="portfolio" className="portfolio section-bg">
              <div className="container">
                <div className="section-title">
                  <h2>Hottest Properties and Products</h2>
                </div>
                <div className="row">
                  <div className="col-lg-12 d-flex justify-content-center">
                    <ul id="portfolio-flters">
                      <li data-filter="*" className="filter-active">All</li>
                      <li data-filter=".filter-app">App</li>
                      <li data-filter=".filter-card">Card</li>
                      <li data-filter=".filter-web">Web</li>
                    </ul>
                  </div>
                </div>
                <div className="row portfolio-container">
                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                      <img src="img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
                      <div className="portfolio-info">
                      <h4>App 1</h4>
                      <p>App</p>
                    </div>
                    <div className="portfolio-links">
                      <a href="img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-plus"></i></a>
                      <a href="#" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div className="portfolio-wrap">
                    <img src="img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                      <h4>Web 3</h4>
                      <p>Web</p>
                    </div>
                    <div className="portfolio-links">
                      <a href="img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus"></i></a>
                      <a href="#" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img src="img/portfolio/portfolio-3.jpg" className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                      <h4>App 2</h4>
                      <p>App</p>
                    </div>
                    <div className="portfolio-links">
                      <a href="img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" className="venobox" title="App 2"><i className="bx bx-plus"></i></a>
                      <a href="#" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div className="portfolio-wrap">
                    <img src="img/portfolio/portfolio-4.jpg" className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                      <h4>Card 2</h4>
                      <p>Card</p>
                    </div>
                    <div className="portfolio-links">
                      <a href="img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" className="venobox" title="Card 2"><i className="bx bx-plus"></i></a>
                      <a href="#" title="More Details"><i className="bx bx-link"></i></a>
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
                      <a href="#" title="More Details"><i className="bx bx-link"></i></a>
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
                      <a href="#" title="More Details"><i className="bx bx-link"></i></a>
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
                      <a href="#" title="More Details"><i className="bx bx-link"></i></a>
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
                      <a href="#" title="More Details"><i className="bx bx-link"></i></a>
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
                      <a href="#" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 footer-info">
                  <img src="img/logo.jpg" alt="" className="img-fluid"/>
                </div>
                <div className="col-lg-3 col-md-6 footer-info">
                  <div className="social-links mt-3">
                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <a href="#" className="back-to-top"><i className="icofont-simple-up"></i></a>
      </div>
    );
  }
}
export default HomePage;