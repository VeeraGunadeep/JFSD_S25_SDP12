import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import farmersImage from './assets/images/background1.jpg';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch default data (example, can be replaced with actual data fetching)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/contact'); // Replace with your API URL
        if (response.ok) {
          const data = await response.json();
          setFormData({
            name: data.name || '',
            email: data.email || '',
            message: '',
          });
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (err) {
        setError('');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        alert('Your message has been sent!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        throw new Error('Error sending message');
      }
    } catch (err) {
      setError('Error sending message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div 
        style={{ 
          height: '100vh', 
          width: '100%', 
          backgroundImage: `url(${farmersImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center' 
        }}
      >
        <div 
          style={{ 
            maxWidth: '600px', 
            width: '100%', 
            backgroundColor: '#ffffffcc', 
            padding: '20px', 
            borderRadius: '8px' 
          }}
        >
          <h2 style={{ fontSize: '30px', fontWeight: 'bold', textAlign: 'center' }}>Contact Us</h2>
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="name" style={{ fontSize: '18px' }}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="email" style={{ fontSize: '18px' }}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="message" style={{ fontSize: '18px' }}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                style={styles.textarea}
              />
            </div>
            <button type="submit" style={styles.submitBtn}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  input: {
    width: '100%',
    padding: '10px',
    margin: '8px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    margin: '8px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  submitBtn: {
    padding: '10px 20px',
    backgroundColor: '#FF5733',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '15px',
  },
};

export default ContactUs;
