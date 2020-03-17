import React from 'react';

var loadjs = require('loadjs');

class ForSale extends React.Component {
    componentDidMount() {
        loadjs('main.js');

        /*
        fetch('getForSaleApts')
        .then(results => {

        }).catch({

        });
        fetch('/getForSaleHomes')
        .then(results => {

        }).catch({

        });
        fetch('/getForSaleOffices')
        .then(results => {

        }).catch({

        });
        */
    }

    render() {
        return (
            <main id="main">
                <section id="portfolio" className="portfolio section-bg">
                    <div className="container">
                        <div className="section-title">
                            <h2>For Sale</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 d-flex justify-content-between">
                                <ul id="portfolio-flters">
                                    <li data-filter="*" className="filter-active">All</li>
                                    <li data-filter=".filter-homes">Homes</li>
                                    <li data-filter=".filter-apartments">Apartments</li>
                                    <li data-filter=".filter-offices">Offices</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row portfolio-container">
                            <div className="col-lg-4 col-md-6 portfolio-item filter-homes">
                                <div className="portfolio-wrap">
                                    <img src="img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
                                    <div className="portfolio-info">
                                        <h4>App 1</h4>
                                        <p>App</p>
                                    </div>
                                    <div className="portfolio-links">
                                        <a href="img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-plus"></i></a>
                                        <a href="/ForSale" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-apartments">
                                <div className="portfolio-wrap">
                                    <img src="img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
                                    <div className="portfolio-info">
                                        <h4>Web 3</h4>
                                        <p>Web</p>
                                    </div>
                                    <div className="portfolio-links">
                                        <a href="img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus"></i></a>
                                        <a href="/ForSale" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-offices">
                                <div className="portfolio-wrap">
                                    <img src="img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
                                    <div className="portfolio-info">
                                        <h4>Web 3</h4>
                                        <p>Web</p>
                                    </div>
                                    <div className="portfolio-links">
                                        <a href="img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus"></i></a>
                                        <a href="/ForSale" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-homes">
                                <div className="portfolio-wrap">
                                    <img src="img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
                                    <div className="portfolio-info">
                                        <h4>App 1</h4>
                                        <p>App</p>
                                    </div>
                                    <div className="portfolio-links">
                                        <a href="img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-plus"></i></a>
                                        <a href="/ForSale" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-apartments">
                                <div className="portfolio-wrap">
                                    <img src="img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
                                    <div className="portfolio-info">
                                        <h4>Web 3</h4>
                                        <p>Web</p>
                                    </div>
                                    <div className="portfolio-links">
                                        <a href="img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus"></i></a>
                                        <a href="/ForSale" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-apartments">
                                <div className="portfolio-wrap">
                                    <img src="img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
                                    <div className="portfolio-info">
                                        <h4>Web 3</h4>
                                        <p>Web</p>
                                    </div>
                                    <div className="portfolio-links">
                                        <a href="img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus"></i></a>
                                        <a href="/ForSale" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-offices">
                                <div className="portfolio-wrap">
                                    <img src="img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
                                    <div className="portfolio-info">
                                        <h4>App 1</h4>
                                        <p>App</p>
                                    </div>
                                    <div className="portfolio-links">
                                        <a href="img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-plus"></i></a>
                                        <a href="/ForSale" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-homes">
                                <div className="portfolio-wrap">
                                    <img src="img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
                                    <div className="portfolio-info">
                                        <h4>Web 3</h4>
                                        <p>Web</p>
                                    </div>
                                    <div className="portfolio-links">
                                        <a href="img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus"></i></a>
                                        <a href="/ForSale" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-offices">
                                <div className="portfolio-wrap">
                                    <img src="img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
                                    <div className="portfolio-info">
                                        <h4>Web 3</h4>
                                        <p>Web</p>
                                    </div>
                                    <div className="portfolio-links">
                                        <a href="img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus"></i></a>
                                        <a href="/ForSale" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default ForSale;