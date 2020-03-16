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
                  <SignoutUser />
                  <WelcomeUser id={1}/>
                </ul>
              </nav>
            </div>
        </div>
      </div>
    )
  }
}

function SignoutUser(props) {
  if(localStorage.getItem('token') !== null) {
    return <React.Fragment><li><Link to="">Sign Out</Link></li></React.Fragment>
  } else {
    return <React.Fragment></React.Fragment>
  }
}

function AddProduct(props) {
  if(localStorage.getItem('token') !== null) {
    return (
      <li><a href="/AddProduct">Add Product</a></li>
    )
  } else {
    return <React.Fragment></React.Fragment>
  }
}

function WelcomeUser(props) {

  var fullName = "Chase Anzelc";


  if (props.id === 0) {
  return <React.Fragment><li><div id="welcome">Welcome {fullName}</div></li><li><a href="/">Sign Out</a></li></React.Fragment>;
  }
  return <li><Link to="/signup">Create Account / Login</Link></li>;
}