import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.navItem}>Home</Link>
      <Link to="/buyer-dashboard" style={styles.navItem}>Products</Link>
      <Link to="/cart" style={styles.navItem}>Cart</Link>
      <Link to="/aboutus" style={styles.navItem}>About Us</Link>
      <Link to="/contact" style={styles.navItem}>Contact</Link>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: '10px 0',
    fontFamily: 'Arial, sans-serif',
  },
  navItem: {
    color: 'white',
    margin: '0 20px',
    textDecoration: 'none',
    fontSize: '18px',
  }
};

export default Navbar;
