import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layouts/Header';
import NavBar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import SignUp from './components/pages/Signup';
import HomePage from './components/pages/HomePage';


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
    </Router>
  );
}

export default App;