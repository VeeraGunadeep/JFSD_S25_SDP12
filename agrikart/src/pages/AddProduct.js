import React, { useState } from 'react';
import axios from 'axios';
import farmersImage from './assets/images/background7.jpg';

const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({
    pname: '',
    pdescription: '',
    price: '',
    imageurl: '',
  });

  const handleAddProduct = async () => {
    try {
      const response = await axios.post('http://localhost:1996/api/farmer/add-product', newProduct);
      if (response.status === 200) {
        alert('Product added successfully!');
        setNewProduct({ pname: '', pdescription: '', price: '', imageurl: '' }); // Reset form
      }
    } catch (error) {
      alert('Error adding product');
      console.error('Add product error:', error);
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
      maxWidth: '500px',
    },
    title: {
      fontSize: '2rem',
      color: '#4CAF50',
      marginBottom: '20px',
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
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Add New Product</h2>
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
  );
};

export default AddProduct;
