import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import farmersImage from './assets/images/background5.jpg';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Send login request to the backend
      const response = await axios.post(`http://localhost:1996/api/login`, {
        email,
        password,
      });

      // Alert the success message
      alert(response.data.message);

      // Check if the response is successful and role is present
      if (response.status === 200) {
        const userRole = response.data.role;

        // Redirect based on the role
        if (userRole === "Farmer") {
          navigate('/Farmer-Dashboard');
        } else if (userRole === "Buyer") {
          navigate('/Buyer-Dashboard');
        } else if (userRole === "Admin") {
          navigate('/Admin-Dashboard');
        }
      }
    } catch (error) {
      alert('Invalid credentials');
      console.error('Login error:', error);
    }
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: `url(${farmersImage})`, // Use the imported image
      backgroundSize: 'cover', // Ensures the image covers the full screen
      backgroundPosition: 'center',
      fontFamily: 'Arial, sans-serif',
    },
    card: {
      backgroundColor: '#fff',
      padding: '20px 30px',
      borderRadius: '10px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      maxWidth: '400px',
      width: '100%',
    },
    title: {
      fontSize: '1.8rem',
      color: '#4CAF50',
      marginBottom: '10px',
      animation: 'fadeIn 1s',
    },
    subtitle: {
      fontSize: '1rem',
      color: '#757575',
      marginBottom: '20px',
      animation: 'fadeIn 1.5s',
    },
    inputGroup: {
      marginBottom: '15px',
    },
    input: {
      width: '100%',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ddd',
      fontSize: '1rem',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#388E3C',
    },
    link: {
      marginTop: '15px',
      fontSize: '0.9rem',
      color: '#4CAF50',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login to Your Account</h2>
        <p style={styles.subtitle}>Access your portal by logging in below.</p>
        <div style={styles.inputGroup}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <button
          style={styles.button}
          onClick={handleLogin}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#388E3C')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#4CAF50')}
        >
          Login
        </button>
        <p>
          Don't have an account?{' '}
          <Link to="/signup" style={styles.link}>
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
