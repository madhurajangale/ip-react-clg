import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
const Navbar = ({ onAdminClick }) => {
  return (
    <nav>
      
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/events">Courses</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={onAdminClick} className="admin-button">Admin</button>
      
    </nav>
  );
};

export default Navbar;
