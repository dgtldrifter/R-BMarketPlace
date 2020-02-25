import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/layouts/navbar';
import Footer from './components/layouts/footer';
import SignUp from './components/pages/signup';
import Home from './components/pages/home';
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