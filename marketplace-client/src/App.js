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
    console.log(localStorage.getItem('token'));
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
        <AddProductPage />
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

const outerStyle = {
  backgroundImage: 'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("../houses-banner.jfif")',
  backgroundSize: 'cover',
  width: '100%',
  height: '100vh'
}

function AddProductPage(props) {
  if(localStorage.getItem('token') !== null) {
    return (
      <Route path="/AddProduct" render={props => (
        <div>
          <NavBar />
          <div style={outerStyle}>
            <AddProduct />
          </div>
          <Footer />
        </div>
      )} />
    )
  } else {
    return <React.Fragment></React.Fragment>
  }
} 