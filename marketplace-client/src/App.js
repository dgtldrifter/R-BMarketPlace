import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layouts/Header';
import NavBar from './components/layouts/Navbar';
import NavbarSignup from './components/layouts/NavbarSignup';
import Footer from './components/layouts/Footer';
import SignUp from './components/pages/Signup';
import HomePage from './components/pages/HomePage';
import AddProduct from './components/pages/AddProduct';

import './App.css';

function App() {
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
        </div>
      )} />
      <Route path="/AddProduct" render={props => (
        <div>
          <NavBar />
          <AddProduct />
        </div>
      )} />
    </Router>
  );
}

export default App;