import React, { Component } from 'react';

import {
    Link
  } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <header>
            <div className="logo">
                LOGO
            </div>

            <nav>
                <ul>
                    <li className="first">
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/contenu">Contenu</Link>
                    </li>
                    <li>
                        <Link to="/projets">Projets</Link>
                    </li>
                    <li>
                        <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                        <Link to="/aboutme">À propos</Link>
                    </li>
                    <li className="last">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
  }
}

export default Header;