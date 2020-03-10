import React from 'react';
import { Link } from 'react-router-dom';

export default class navbar extends React.Component {
  render() {
      return (
        <div>
          <div id="header">
            <div className="container d-flex">
              <div className="logo mr-auto">
                <Link to="/"><img src="img/logo.jpg" alt="Logo" className="img-fluid"/></Link>
              </div>
              <nav className="nav-menu d-none d-lg-block">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li className="active"><Link to="/signup">Sign Up / Login</Link></li>
                  <li><a href="#header">Link</a></li>
                  <li className="drop-down"><a href="">Categories</a>
                    <ul>
                      <li><a href="#">Furniture</a></li>
                      <li className="drop-down"><a href="#">Real Estate</a>
                        <ul>
                          <li><a href="#">Apts / Homes For Rent</a></li>
                          <li><a href="#">Apts / Homes For Sale</a></li>
                          <li><a href="#">Office Space / Commerical</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Cooking</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
        </div>
      </div>
    )
  }
}