import React, { Component } from 'react';

import {
    Link
  } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <header>
            <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul id="links" className="list-group list-group-horizontal center">
                    <li className="first list-group-item"><Link to="/">Accueil</Link></li>
                    <li className="list-group-item"><Link to="/contenu">Contenu</Link></li>
                    <li className="list-group-item"><Link to="/projets">Projets</Link></li>
                    <a className="navbar-brand" href="#"><img src="/images/logo.png" alt="logo" width="150px" height="150px"></img></a>
                    <li className="list-group-item"><Link to="/faq">FAQ</Link></li>
                    <li className="list-group-item"><Link to="/aboutme">À propos</Link></li>
                    <li className="last list-group-item"><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
  }
}

export default Header;