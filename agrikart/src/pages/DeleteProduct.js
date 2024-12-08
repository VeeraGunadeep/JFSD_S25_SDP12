import React, { useState, useEffect } from 'react';
import axios from 'axios';
import farmersImage from './assets/images/background5.jpg';

const DeleteProduct = () => {
  const [products, setProducts] = useState([]);

  // Fetch the list of products added by the farmer
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:1996/api/farmer/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Handle deleting a product
  const handleDeleteProduct = async (productId) => {
    try {
      const response = await axios.delete(`http://localhost:1996/api/farmer/delete-product/${productId}`);
      if (response.status === 200) {
        alert('Product deleted successfully!');
        setProducts(products.filter(product => product.id !== productId)); // Remove deleted product from the list
      }
    } catch (error) {
      alert('Error deleting product');
      console.error('Delete product error:', error);
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
    productTable: {
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
      padding: '8px 16px',
      backgroundColor: '#f44336',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '0.9rem',
    },
    productImage: {
      width: '50px',
      height: '50px',
      objectFit: 'cover',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Delete Products</h2>
        <table style={styles.productTable}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Product Name</th>
              <th style={styles.tableHeader}>Image</th>
              <th style={styles.tableHeader}>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id} style={styles.tableRow}>
                <td style={styles.tableCell}>{product.pname}</td>
                <td style={styles.tableCell}>
                  <img src={product.imageurl} alt={product.pname} style={styles.productImage} />
                </td>
                <td style={styles.tableCell}>
                  <button
                    style={styles.deleteButton}
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeleteProduct;
