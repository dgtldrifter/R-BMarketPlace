import React from 'react';
import { Link } from 'react-router-dom';

export default class navbar extends React.Component {
  render() {
      return (
        <div>
          <div id="header">
            <div className="container d-flex">
              <div className="logo mr-auto">
                <a href="/"><img src="img/logo.jpg" alt="Logo" className="img-fluid"/></a>
              </div>
              <nav className="nav-menu d-none d-lg-block">
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="#main">Products and Properties</a></li>
                  <li className="active"><Link to="/signup">Sign Up</Link></li>
                  <li><a href="#header">Link</a></li>
                  <li className="drop-down"><a href="">Drop Down</a>
                    <ul>
                      <li><a href="#">Drop Down 1</a></li>
                      <li className="drop-down"><a href="#">Drop Down 2</a>
                        <ul>
                          <li><a href="#">Deep Drop Down 1</a></li>
                          <li><a href="#">Deep Drop Down 2</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Drop Down 3</a></li>
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