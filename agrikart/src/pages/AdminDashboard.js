import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import farmersImage from './assets/images/background7.jpg';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Fetch the list of users (Farmers and Buyers)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:1996/api/admin/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  // Handle delete user action
  const handleDeleteUser = async (userId) => {
    try {
      const response = await axios.delete(`http://localhost:1996/api/admin/delete/${userId}`);
      if (response.status === 200) {
        alert('User deleted successfully!');
        setUsers(users.filter(user => user.id !== userId)); // Update the users list after deletion
      }
    } catch (error) {
      alert('Error deleting user');
      console.error('Delete error:', error);
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
      width: '100%',
      maxWidth: '800px',
    },
    title: {
      fontSize: '2rem',
      color: '#4CAF50',
      marginBottom: '20px',
    },
    userTable: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px',
    },
    tableHeader: {
      backgroundColor: '#4CAF50',
      color: '#fff',
      padding: '10px',
      fontSize: '1.1rem',
    },
    tableRow: {
      borderBottom: '1px solid #ddd',
    },
    tableCell: {
      padding: '10px',
      fontSize: '1rem',
    },
    deleteButton: {
      padding: '5px 10px',
      backgroundColor: '#F44336',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'background-color 0.3s ease',
    },
    deleteButtonHover: {
      backgroundColor: '#D32F2F',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Admin Dashboard</h2>
        <p>Manage Farmers and Buyers below. You can delete any user.</p>
        
        <table style={styles.userTable}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Name</th>
              <th style={styles.tableHeader}>Email</th>
              <th style={styles.tableHeader}>Role</th>
              <th style={styles.tableHeader}>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => {
              const name = user.email.split('@')[0]; // Split email before @ to get the name
              return (
                <tr key={user.id} style={styles.tableRow}>
                  <td style={styles.tableCell}>{name}</td>
                  <td style={styles.tableCell}>{user.email}</td>
                  <td style={styles.tableCell}>{user.role}</td>
                  <td style={styles.tableCell}>
                    <button
                      style={styles.deleteButton}
                      onClick={() => handleDeleteUser(user.id)} // Use user.id instead of _id
                      onMouseOver={(e) => (e.target.style.backgroundColor = '#D32F2F')}
                      onMouseOut={(e) => (e.target.style.backgroundColor = '#F44336')}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
