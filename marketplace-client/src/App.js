import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import SignUp from './components/pages/Signup';
import Home from './components/pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" render={props => (
        <Home />
      )} />
      <Route path="/signup" component={SignUp} />
      {/*<Footer />*/}
    </Router>
  );
}

export default App;