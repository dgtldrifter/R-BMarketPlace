import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import SignUp from './components/pages/Signup';
import HomePage from './components/pages/HomePage';
import AddProduct from './components/pages/AddProduct';
import VerifyEmail from './components/pages/VerifyEmail';
import ForgotPassword from './components/pages/ForgotPassword';
import Category from './components/pages/Category';

import './App.css';
var email = "";

class App extends React.Component {
  componentDidMount() {
    if (localStorage.getItem('token') !== null) {
      axios({
        method: 'POST',
        url: 'users/authToken',
        headers: {
          "Content-Type": "application/json",
          'token': localStorage.getItem('token')
        }
      }).then((response) => {
        email = response.data.email;
      }).catch((error) => {
        localStorage.clear();
      });
    }
  }

  render() {
    return (
      <Router>
        <Route exact path="/" render={props => (
          <div>
            <Header />
            <Navbar />
            <HomePage />
            <ScrollToTop />
            <Footer />
          </div>
        )} />
        <Route path="/Signup" render={props => (
          <div>
            <Navbar />
            <SignUp />
            <ScrollToTop />
            <Footer />
          </div>
        )} />
        <AddProductPage />
        <Route path="/Category/:category" render={props => (
          <div>
            <Navbar />
            <Category category={props.match.params.category} categoryExtra={props.location.state.categoryExtra}/>
            <ScrollToTop />
            <Footer />
          </div>
        )} />
        <Route path="/VerifyEmail" render={props => (
          <div>
            <Navbar />
            <div style={outerStyle}>
              <VerifyEmail />
            </div>
            <Footer />
          </div>
        )} />
        <Route path="/ForgotPassword" render={props => (
          <div>
            <Navbar />
            <div style={outerStyle}>
              <ForgotPassword />
            </div>
            <Footer />
          </div>
        )} />
      </Router>
    );
  }
}

export default App;

const outerStyle = {
  backgroundImage: 'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("../houses-banner.jfif")',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    width: '100%',
    height: '100%'
}

function AddProductPage(props) {
  if (localStorage.getItem('token') !== null) {
    return (
      <Route path="/AddProduct" render={props => (
        <div>
          <Navbar />
          <div style={outerStyle}>
            <AddProduct />
          </div>
          <ScrollToTop />
          <Footer />
        </div>
      )} />
    )
  } else {
    return <React.Fragment></React.Fragment>
  }
}


function ScrollToTop(){
  return <a href="#" className="back-to-top"><i className="icofont-simple-up"></i></a>;
}