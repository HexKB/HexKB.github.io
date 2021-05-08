import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import HomePage from './components/pages/homePage';
import Content from './components/pages/content';

import './assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/contenu' component={Content} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;