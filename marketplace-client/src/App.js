import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/layouts/navbar';
import Header from './components/layouts/header';
import SignUp from './components/pages/signup';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <div className="container">
            {/* <Header /> */}
          </div>
        <NavBar />
        <SignUp />
      </div>
    </Router>
  );
}

export default App;


