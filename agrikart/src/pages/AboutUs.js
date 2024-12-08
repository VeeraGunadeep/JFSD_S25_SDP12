// AboutUs.js
import React from 'react';
import Navbar from './Navbar';
import farmersImage from './assets/images/background3.jpg';

const AboutUs = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh', // Use minHeight instead of height to ensure full coverage
      backgroundImage: `url(${farmersImage})`, // Use the imported image
      backgroundSize: 'cover', // Ensures the image covers the full screen
      backgroundPosition: 'center', // Centers the image
      backgroundAttachment: 'fixed', // Keeps the background fixed when scrolling
      fontFamily: 'Arial, sans-serif',
    },
    content: {
      padding: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slight transparency to make text more readable
      borderRadius: '10px',
      maxWidth: '700px',
      textAlign: 'center', // Centers the text inside the content box
      marginBottom: '20px', // Adds some space from the bottom
    },
  };

  return (
    <div style={styles.container}>
      <Navbar /> {Array(30).fill(<br />)}
      <div style={styles.content}>
        <h2 style={{ fontSize: '30px', fontWeight: 'bold', textAlign: 'center' }}>About Us</h2>
        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          We are a company dedicated to bringing the best products to our customers. Our mission is to provide 
          top-quality goods while ensuring customer satisfaction. Our team works tirelessly to ensure that our 
          products meet the highest standards. Thank you for choosing us!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
