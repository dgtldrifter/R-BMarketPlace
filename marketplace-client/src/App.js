import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layouts/Header';
import NavBar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import SignUp from './components/pages/Signup';
import HomePage from './components/pages/HomePage';
import AddProduct from './components/pages/AddProduct';
import ForSale from './components/pages/ForSale';
import ForRent from './components/pages/ForRent';

import './App.css';

class App extends React.Component {
  componentDidMount() {
    // 401 bad token
    if(localStorage.getItem('token') !== null) {
      axios({
        method: 'POST',
        url: 'users/authToken',
        headers: {
          "Content-Type": "application/json",
          'token': localStorage.getItem('token')
        }
      }).then((response) => {
          //console.log(response);
      }).catch((error) => {
          //console.log(error);
      });
    }
  }

  render() {
    return (
      <Router>
        <Route exact path="/" render={props => (
          <div>
            <Header />
            <NavBar />
            <HomePage />
            <Footer />
          </div>
        )} />
        <Route path="/Signup" render={props => (
          <div>
            <NavBar />
            <SignUp />
            <Footer />
          </div>
        )} />
        <Route path="/AddProduct" render={props => (
          <div>
            <NavBar />
            <AddProduct />
            <Footer />
          </div>
        )} />
        <Route path="/ForSale" render={props => (
          <div>
            <NavBar />
            <ForSale />
            <Footer />
          </div>
        )} />
        <Route path="/ForRent" render={props => (
          <div>
            <NavBar />
            <ForRent />
            <Footer />
          </div>
        )} />
      </Router>
    );
  }
}

export default App;