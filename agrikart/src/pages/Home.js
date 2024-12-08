import React from 'react';
import farmersImage from './assets/images/background.jpg'; // Import the image

const Home = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: `url(${farmersImage})`, // Use the imported image
      backgroundSize: 'cover', // Ensures the image covers the full screen
      backgroundPosition: 'center', // Centers the image
      backgroundAttachment: 'fixed', // Keeps the background fixed when scrolling
      fontFamily: 'Arial, sans-serif',
    },
    navbar: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#4CAF50',
      padding: '10px 0',
      marginBottom: '20px',
    },
    navLink: {
      margin: '0 15px',
      color: '#fff',
      textDecoration: 'none',
      fontSize: '1.2rem',
    },
    card: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slight transparency to make text stand out
      padding: '20px 30px',
      borderRadius: '10px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      width: '100%',
      maxWidth: '800px',
    },
    title: {
      fontSize: '2rem',
      color: '#4CAF50',
      marginBottom: '10px',
    },
    welcomeText: {
      fontSize: '1.2rem',
      color: '#333',
    },
  };

  return (
    <div style={styles.container}>
      {/* Navbar */}
      <div style={styles.navbar}>
        <a href="/" style={styles.navLink}>
          Home
        </a>
        <a href="/products" style={styles.navLink}>
          Products
        </a>
        <a href="/add-product" style={styles.navLink}>
          Add Product
        </a>
        <a href="/delete-product" style={styles.navLink}>
          Delete Product
        </a>
      </div>

      {Array(24).fill(<br />)}

      {/* Body */}
      <div style={styles.card}> 
        <h2 style={styles.title}>Welcome to the Farmer Dashboard</h2>
        <p style={styles.welcomeText}>
          Manage your products easily and efficiently!
        </p>
      </div>
    </div>
  );
};

export default Home;
