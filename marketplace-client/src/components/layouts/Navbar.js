import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
  render() {
      return (
        <div>     
          <div id="header">
            <div className="container d-flex">
              <div className="logo mr-auto">
                <Link to="/"><img src="../../img/logo.jpg" alt="Logo" className="img-fluid"/></Link>
              </div>
              <nav className="nav-menu d-none d-lg-block">
                <ul>
                  <li className="active"><Link to="/">Home</Link></li>
                  <AddProduct />
                  <li className="drop-down"><a href="/">Postings</a>
                    <ul>
                      <li className="drop-down"><a href="/">Community</a>
                        <ul>
                          <li><Link to='/Category/Community/Artists'>Artists</Link></li>
                        </ul>
                      </li>
                      <li className="drop-down"><a href="/">For Sale</a>
                        <ul>
                          <li>
                          <Link to='/Category/For Sale/Apartments'>Apartments</Link>
                          </li>
                          <li>
                          <Link to='/Category/For Sale/Homes'>Homes</Link>
                          </li>
                          <li>
                          <Link to='/Category/For Sale/Office - Commercial Space'>Office / Commercial Space</Link>
                          </li>
                          <li>
                          <Link to='/Category/For Sale/Cooking'>Cooking</Link>
                          </li>
                          <li>
                          <Link to='/Category/For Sale/Transportation'>Transportation</Link>
                          </li>
                          <li>
                          <Link to='/Category/For Sale/Furniture'>Furniture</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="drop-down"><a href="/">For Rent</a>
                        <ul>
                        <li>
                          <Link to='/Category/For Rent/Apartments'>Apartments</Link>
                          </li>
                          <li>
                          <Link to='/Category/For Rent/Homes'>Homes</Link>
                          </li>
                          <li>
                          <Link to='/Category/For Rent/Office - Commercial Space'>Office / Commercial Space</Link>
                          </li>
                          <li>
                          <Link to='/Category/For Rent/Cooking'>Cooking</Link>
                          </li>
                          <li>
                          <Link to='/Category/For Rent/Transportation'>Transportation</Link>
                          </li>
                          <li>
                          <Link to='/Category/For Rent/Furniture'>Furniture</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="drop-down"><a href="/">Services</a>
                        <ul>
                          <li>
                            <Link to='/Category/Services/Cleaning Service'>Cleaning Service</Link>
                          </li>
                        </ul>
                      </li>
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