import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import './NavBar.css';
function Navbar() {
  return (
    <nav className="navbar-header">
      <div className="logo-navbar">
        <img src={logo} alt="Logo de Kasa" />
      </div>
      <ul className="contenu-navbar">
        <Link to='/home' className='lien-navbar'>
            <li className='element-list'> Acceuil</li>
        </Link>
        <Link to='/about' className='lien-navbar'>
            <li className='element-list'> A Propos</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
