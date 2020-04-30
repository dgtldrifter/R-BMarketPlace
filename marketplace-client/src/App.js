import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import SignUp from './components/pages/Signup';
import HomePage from './components/pages/HomePage';
import AddProduct from './components/pages/AddProduct';
import EditPost from './components/pages/EditPost';
import VerifyEmail from './components/pages/VerifyEmail';
import ForgotPassword from './components/pages/ForgotPassword';
import Category from './components/pages/Category';
import Product from './components/pages/Product';
import UserPage from './components/pages/UserPage';

import './App.css';

class App extends React.Component {
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
        <EditPostPage />
        <Route path="/UserPage" render={props => (
          <div>
            <Navbar />
            <UserPage/>
            <ScrollToTop />
            <Footer />
          </div>
        )} />
        <Route path="/Product/:productid" render={props => (
          <div>
            <Navbar />
            <Product productid={props.match.params.productid}/>
            <ScrollToTop />
            <Footer />
          </div>
        )} />
        <Route path="/Category/:category/:categoryExtra" render={props => (
          <div>
            <Navbar />
            <Category category={props.match.params.category} categoryExtra={props.match.params.categoryExtra}/>
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
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
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

function EditPostPage(props) {
  if(localStorage.getItem('token') !== null) {
    return (
      <Route path="/EditPost/:id" render={props => (
        <div>
          <Navbar />
          <div style={outerStyle}>
            <EditPost id={props.match.params.id} />
          </div>
          <ScrollToTop />
          <Footer />
        </div>
      )} />
    )
  } else {
    return <React.Fragment></React.Fragment>;
  }
}


function ScrollToTop(){
  return <a href="#" className="back-to-top"><i className="icofont-simple-up"></i></a>;
}