import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
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
                  <AddProduct />
                  <li className="drop-down"><a href="/">Categories</a>
                    <ul>
                      <li><a href="/">Transportation</a></li>
                      <li><a href="/">Furniture</a></li>
                      <li className="drop-down"><a href="/">Real Estate</a>
                        <ul>
                          <li><Link to="/ForSale">For Sale</Link></li>
                          <li><Link to="/ForRent">For Rent</Link></li>
                        </ul>
                      </li>
                      <li><a href="/">Cooking</a></li>
                    </ul>
                  </li>
                  <WelcomeUser />
                  <SignoutUser />
                </ul>
              </nav>
            </div>
        </div>
      </div>
    )
  }
}

function AddProduct(props) {
  if(localStorage.getItem('token') !== null) {
    return (
      <li><Link to="/AddProduct">Add Product</Link></li>
    )
  } else {
    return <React.Fragment></React.Fragment>
  }
}

function WelcomeUser(props) {
  if (localStorage.getItem('fullName') !== null) {
  return <React.Fragment><li><div id="welcome">Welcome {localStorage.getItem('fullName')}</div></li></React.Fragment>;
  } else{
  return <li><Link to="/signup">Create Account / Login</Link></li>; 
  }
}

function SignoutUser(props) {
  if(localStorage.getItem('token') !== null) {
    return <li><Link to="/" id="signout">Sign Out</Link></li>
  } else {
    return <React.Fragment></React.Fragment>
  }
}