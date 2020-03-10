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
                  <li className="active"><Link to="/">Home</Link></li>
                  <li><a href="#main">Popular Products</a></li>
                  <li><a href="#header">Link</a></li>
                  <li className="drop-down"><a href="">Categories</a>
                    <ul>
                      <li><a href="#">Furniture</a></li>
                      <li className="drop-down"><a href="#">Real Estate</a>
                        <ul>
                          <li><a href="#">Homes</a></li>
                          <li><a href="#">Apartments</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Cooking</a></li>
                    </ul>
                  </li>
                  <WelcomeUser id={1}/>
                </ul>
              </nav>
            </div>
        </div>
      </div>
    )
  }
}


function WelcomeUser(props) {

  var fullName = "Chase Anzelc";


  if (props.id == 0) {
  return <React.Fragment><li><div id="welcome">Welcome {fullName}</div></li><li><a>Sign Out</a></li></React.Fragment>;
  }
  return <li><Link to="/signup">Create Account / Login</Link></li>;
}
