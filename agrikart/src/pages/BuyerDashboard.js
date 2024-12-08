import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';  // For navigation to cart page
import Navbar from './Navbar';  // Import Navbar
import farmersImage from './assets/images/background5.jpg'; // Ensure this path is correct

const BuyerDashboard = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  
  // Get cart items from localStorage if they exist
  const getCartItems = () => JSON.parse(localStorage.getItem('cart')) || [];

  useEffect(() => {
    // Fetch all products from the database
    fetch('http://localhost:1996/api/farmer/products')  // Replace with your API endpoint
      .then(res => res.json())
      .then(data => setProducts(data))  // Set the products to state
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  const handleAddToCart = (product) => {
    const cartItems = getCartItems();
    cartItems.push(product);  // Add product to cart
    localStorage.setItem('cart', JSON.stringify(cartItems));  // Save cart to localStorage
  };

  const handleBuyNow = (product) => {
    // Navigate to payment page with product details or ID
    navigate('/payment', { state: { product } });
  };

  const handleGoToCart = () => {
    navigate('/cart');  // Navigate to cart page
  };

  return (
    <div style={styles.container}> {/* Apply styles.container here */}
      <Navbar />  {/* Add Navbar here */}
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>All Products</h2>
      <div style={styles.productGrid}>
        {products.map(product => (
          <div key={product.id} style={styles.productCard}>
            <img
              src={product.imageurl || 'https://via.placeholder.com/150'}
              alt={product.pname}
              style={styles.productImage}
            />
            <h3 style={styles.productName}>{product.pname}</h3>
            <p style={styles.productDescription}>{product.pdescription}</p>
            <p style={styles.productPrice}>${product.price}</p>
            <div style={styles.productActions}>
              <button
                onClick={() => handleAddToCart(product)}
                style={styles.addToCartBtn}
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleBuyNow(product)}
                style={styles.buyNowBtn}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button onClick={handleGoToCart} style={styles.cartBtn}>Go to Cart</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh', // Ensure the height covers the full screen
    backgroundImage: `url(${farmersImage})`, // Use the imported image
    backgroundSize: 'cover', // Ensures the image covers the full screen
    backgroundPosition: 'center', // Centers the image
    backgroundAttachment: 'fixed', // Keeps the background fixed when scrolling
    fontFamily: 'Arial, sans-serif',
  },
  productGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  },
  productCard: {
    width: '220px',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#d9d9d9',
    textAlign: 'center',
    transition: 'transform 0.2s',
  },
  productImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  productName: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '10px',
  },
  productDescription: {
    fontSize: '14px',
    color: '#777',
    margin: '10px 0',
  },
  productPrice: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#2d9cdb',
  },
  productActions: {
    marginTop: '10px',
  },
  addToCartBtn: {
    padding: '8px 16px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    marginRight: '10px',
  },
  buyNowBtn: {
    padding: '8px 16px',
    backgroundColor: '#2d9cdb',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  cartBtn: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#FF5733',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default BuyerDashboard;
