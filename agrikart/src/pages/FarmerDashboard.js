import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FarmerDashboard = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    pname: '',
    pdescription: '',
    price: '',
    imageurl: ''
  });

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

  // Handle adding a new product
  const handleAddProduct = async () => {
    try {
      const response = await axios.post('http://localhost:1996/api/farmer/add-product', newProduct);
      if (response.status === 200) {
        alert('Product added successfully!');
        setProducts([...products, response.data]); // Add new product to the list
        setNewProduct({ pname: '', pdescription: '', price: '', imageurl: '' }); // Reset form
      }
    } catch (error) {
      alert('Error adding product');
      console.error('Add product error:', error);
    }
  };

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
      background: 'linear-gradient(135deg, #FF9800, #FFC107)',
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
    inputField: {
      width: '100%',
      padding: '10px',
      margin: '5px 0',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '1rem',
    },
    addButton: {
      padding: '10px 20px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
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
        <h2 style={styles.title}>Farmer Dashboard</h2>
        <p>Manage your products below. You can also add new products.</p>

        {/* Display products */}
        <table style={styles.productTable}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Product Name</th>
              <th style={styles.tableHeader}>Description</th>
              <th style={styles.tableHeader}>Price</th>
              <th style={styles.tableHeader}>Image</th>
              <th style={styles.tableHeader}>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id} style={styles.tableRow}>
                <td style={styles.tableCell}>{product.pname}</td>
                <td style={styles.tableCell}>{product.pdescription}</td>
                <td style={styles.tableCell}>{product.price}</td>
                <td style={styles.tableCell}>
                  {/* Display image using the URL */}
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

        {/* Form to add a new product */}
        <h3>Add New Product</h3>
        <div>
          <input
            style={styles.inputField}
            type="text"
            placeholder="Product Name"
            value={newProduct.pname}
            onChange={(e) => setNewProduct({ ...newProduct, pname: e.target.value })}
          />
          <input
            style={styles.inputField}
            type="text"
            placeholder="Product Description"
            value={newProduct.pdescription}
            onChange={(e) => setNewProduct({ ...newProduct, pdescription: e.target.value })}
          />
          <input
            style={styles.inputField}
            type="number"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          />
          <input
            style={styles.inputField}
            type="text"
            placeholder="Image URL"
            value={newProduct.imageurl}
            onChange={(e) => setNewProduct({ ...newProduct, imageurl: e.target.value })}
          />
          <button style={styles.addButton} onClick={handleAddProduct}>
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;
