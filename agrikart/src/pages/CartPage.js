import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; // Import the Navbar component
import farmersImage from './assets/images/background7.jpg';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);  // Get items from local storage
  }, []);

  const handleCheckout = () => {
    // Navigate to payment page with the cart items
    navigate('/payment', { state: { cartItems } });
  };

  const handleRemoveItem = (index) => {
    const updatedCart = cartItems.filter((item, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));  // Update cart in local storage
  };

  const handleRemoveAll = () => {
    setCartItems([]);
    localStorage.removeItem('cart');  // Clear cart from local storage
  };

  return (
    <div style={styles.container}>
      <Navbar />  {/* Add Navbar here */}
      <h2 style={styles.heading}>Your Cart</h2>
      <div style={styles.cartGrid}>
        {cartItems.length === 0 ? (
          <p style={styles.emptyCartMessage}>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} style={styles.cartItemCard}>
              <img
                src={item.imageurl || 'https://via.placeholder.com/150'}
                alt={item.pname}
                style={styles.cartItemImage}
              />
              <div style={styles.itemDetails}>
                <h3 style={styles.cartItemName}>{item.pname}</h3>
                <p style={styles.cartItemPrice}>${item.price}</p>
              </div>
              <button
                onClick={() => handleRemoveItem(index)}
                style={styles.removeBtn}
              >
                Remove Item
              </button>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <div style={styles.actions}>
          <button onClick={handleRemoveAll} style={styles.removeAllBtn}>Remove All Items</button>
          <button onClick={handleCheckout} style={styles.checkoutBtn}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: `url(${farmersImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  heading: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: '30px',
  },
  cartGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px',
    width: '100%',
  },
  cartItemCard: {
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cartItemCardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
  },
  cartItemImage: {
    width: '90px',
    height: '90px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  itemDetails: {
    flex: '1',
  },
  cartItemName: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
  },
  cartItemPrice: {
    fontSize: '16px',
    color: '#FF5733',
    fontWeight: 'bold',
  },
  removeBtn: {
    padding: '8px 15px',
    backgroundColor: '#FF5733',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  removeBtnHover: {
    backgroundColor: '#e74c3c',
  },
  emptyCartMessage: {
    fontSize: '20px',
    color: '#fff',
    textAlign: 'center',
  },
  actions: {
    marginTop: '30px',
    textAlign: 'center',
  },
  checkoutBtn: {
    padding: '12px 25px',
    backgroundColor: '#FF5733',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  },
  removeAllBtn: {
    padding: '12px 25px',
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    marginRight: '15px',
    transition: 'background-color 0.3s ease',
  },
};

export default CartPage;
