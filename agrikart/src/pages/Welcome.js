import React from 'react';
import farmersImage from './assets/images/farmers.jpg'; // Import the local image
import farmersImage2 from './assets/images/background2.jpg';

const Welcome = () => {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundImage: `url(${farmersImage2})`, // Use the imported image
            backgroundSize: 'cover', // Ensures the image covers the full screen
            backgroundPosition: 'center', // Centers the image
            backgroundAttachment: 'fixed', 
            color: '#fff',
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center',
        },
        title: {
            fontSize: '2.5rem',
            marginBottom: '10px',
            animation: 'fadeIn 2s',
            color: '#006400',
        },
        tagline: {
            fontSize: '1.2rem',
            marginBottom: '20px',
            animation: 'fadeIn 2.5s',
            color: '#000000',
            
        },
        aboutSection: {
            maxWidth: '600px',
            marginBottom: '30px',
            animation: 'slideIn 1.5s',
        },
        buttonsContainer: {
            display: 'flex',
            gap: '20px',
            marginTop: '20px',
        },
        button: {
            padding: '10px 20px',
            fontSize: '1rem',
            color: '#4CAF50',
            backgroundColor: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease, background-color 0.3s ease',
        },
        buttonHover: {
            transform: 'scale(1.1)',
            backgroundColor: '#e8f5e9',
        },
        image: {
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '10px',
            marginBottom: '20px',
            animation: 'zoomIn 1.5s',
        },
        footer: {
            position: 'absolute',
            bottom: '10px',
            fontSize: '0.8rem',
        },
        '@keyframes fadeIn': {
            from: { opacity: 0 },
            to: { opacity: 1 },
        },
        '@keyframes slideIn': {
            from: { transform: 'translateY(50px)', opacity: 0 },
            to: { transform: 'translateY(0)', opacity: 1 },
        },
        '@keyframes zoomIn': {
            from: { transform: 'scale(0.9)', opacity: 0 },
            to: { transform: 'scale(1)', opacity: 1 },
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Supporting Farmers for Rural Entrepreneurship</h1>
            <p style={styles.tagline}>
                Empowering farmers to create value-added products using technology.
            </p>
            <img
                src={farmersImage} // Use the imported local image
                alt="Farmers and Products"
                style={styles.image}
            />
            <div style={styles.aboutSection}>
                <p>
                    Our platform connects farmers with global buyers, helping them transform their crops
                    into valuable products. From processed foods to handmade goods, we aim to promote rural
                    entrepreneurship.
                </p>
            </div>
            <div style={styles.buttonsContainer}>
                <button
                    style={styles.button}
                    onMouseOver={(e) => (e.target.style.transform = 'scale(1.1)')}
                    onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
                    onClick={() => window.location.href = '/signup'}
                >
                    Sign Up
                </button>
                <button
                    style={styles.button}
                    onMouseOver={(e) => (e.target.style.transform = 'scale(1.1)')}
                    onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
                    onClick={() => window.location.href = '/login'}
                >
                    Log In
                </button>
            </div>
            <footer style={styles.footer}>
                &copy; 2024 Rural Entrepreneurship | All rights reserved.
            </footer>
        </div>
    );
};

export default Welcome;
