import React from 'react';

function footer() {
    return (
        <div>
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-info">
                                <img src="../img/logo.jpg" alt="" className="img-fluid"/>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-info">
                                <div className="social-links mt-3">
                                    {/*
                                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                                    <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                    */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default footer;
