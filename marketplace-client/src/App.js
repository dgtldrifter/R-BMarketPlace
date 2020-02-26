import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import SignUp from './components/pages/Signup';
import HomePage from './components/pages/HomePage';


import './App.css';

function App() {
  return (
    <Router>
      {/*<NavBar />*/}
      <Route exact path="/" render={props => (
        <HomePage />
      )} />
      <Route path="/signup" component={SignUp} />
      {/*<Footer />*/}
    </Router>
  );
}

export default App;