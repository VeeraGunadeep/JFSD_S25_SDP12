import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import farmersImage from './assets/images/background.jpg'; // Import the image


const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Farmer');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const checkPasswordStrength = (password) => {
    if (password.length < 6) {
      setPasswordStrength('Weak');
      setPasswordError('Password must be at least 6 characters long');
    } else if (!/\d/.test(password)) {
      setPasswordStrength('Medium');
      setPasswordError('Password must contain at least one number');
    } else {
      setPasswordStrength('Strong');
      setPasswordError('');
    }
  };

  const handleRegister = async () => {
    if (!name || !email || !password) {
      setErrorMessage('All fields are required');
      return;
    }

    if (emailError || passwordError) {
      setErrorMessage('Please correct the errors before submitting');
      return;
    }

    try {
      const response = await axios.post('http://localhost:1996/api/signup', {
        name,
        email,
        password,
        role,
      });

      alert(response.data.message);
      if (response.status === 200) {
        navigate('/login');
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrorMessage('Email already in use');
      } else {
        setErrorMessage('An error occurred during signup. Please try again later.');
      }
      console.error('Signup error:', error);
    }
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundImage: `url(${farmersImage})`, // Use the imported image
      backgroundSize: 'cover', // Ensures the image covers the full screen
      backgroundPosition: 'center', // Centers the image
      backgroundAttachment: 'fixed',
      fontFamily: 'Arial, sans-serif',
    },
    card: {
      width: '100%',
      maxWidth: '400px',
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      boxSizing: 'border-box',
    },
    title: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#333',
      marginBottom: '10px',
    },
    subtitle: {
      fontSize: '14px',
      color: '#777',
      marginBottom: '20px',
    },
    inputGroup: {
      marginBottom: '20px',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '5px 0',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px',
      boxSizing: 'border-box',
    },
    select: {
      width: '100%',
      padding: '10px',
      margin: '5px 0',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px',
      backgroundColor: '#fff',
      boxSizing: 'border-box',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#4CAF50',
      border: 'none',
      borderRadius: '5px',
      color: '#fff',
      fontSize: '18px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#388E3C',
    },
    error: {
      color: '#d9534f',
      fontSize: '14px',
      marginTop: '10px',
    },
    passwordStrength: {
      fontSize: '14px',
      color: '#888',
    },
    link: {
      color: '#007bff',
      textDecoration: 'none',
    },
    linkContainer: {
      marginTop: '10px',
      fontSize: '14px',
      color: '#333',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create an Account</h2>
        <p style={styles.subtitle}>
          Join us to transform crops into valuable products and connect globally.
        </p>

        {errorMessage && <div style={styles.error}>{errorMessage}</div>}

        <div style={styles.inputGroup}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
            style={styles.input}
          />
          {emailError && <div style={styles.error}>{emailError}</div>}
        </div>

        <div style={styles.inputGroup}>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              checkPasswordStrength(e.target.value);
            }}
            style={styles.input}
          />
          {passwordError && <div style={styles.error}>{passwordError}</div>}
          <p style={styles.passwordStrength}>Password Strength: {passwordStrength}</p>
        </div>

        <div style={styles.inputGroup}>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={styles.select}
          >
            <option value="Farmer">Farmer</option>
            <option value="Buyer">Buyer</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <button
          style={styles.button}
          onClick={handleRegister}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#388E3C')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#4CAF50')}
        >
          Register
        </button>

        <div style={styles.linkContainer}>
          <p>
            Already have an account?{' '}
            <Link to="/login" style={styles.link}>
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
