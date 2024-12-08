import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import farmersImage from './assets/images/background8.jpg';
const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;  // Product passed from Buy Now
  const cartItems = location.state?.cartItems;  // Cart items passed from the cart

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // If neither product nor cartItems is present, return early
  if (!product && !cartItems) {
    return <div>Product or Cart data is missing!</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({
      ...paymentDetails,
      [name]: value,
    });
  };

  const handlePayment = () => {
    // Here you would make the actual API call to process the payment
    console.log('Payment Details:', paymentDetails);
    setPaymentSuccess(true);  // Simulate a successful payment
  };

  const handleContinueShopping = () => {
    navigate('/Buyer-Dashboard');  // Redirect to the homepage or wherever you want
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Payment Details</h2>
      <div style={styles.paymentForm}>
        {!paymentSuccess ? (
          <div>
            {product ? (
              <>
                <p><strong>Product:</strong> {product.pname}</p>
                <p><strong>Price:</strong> ${product.price}</p>
              </>
            ) : (
              <>
                <h3>Cart Items</h3>
                {cartItems.map(item => (
                  <div key={item.id}>
                    <p><strong>Product:</strong> {item.pname}</p>
                    <p><strong>Price:</strong> ${item.price}</p>
                  </div>
                ))}
                <p><strong>Total:</strong> ${cartItems.reduce((total, item) => total + item.price, 0)}</p>
              </>
            )}

            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={paymentDetails.cardNumber}
              onChange={handleChange}
              style={styles.inputField}
            />
            <input
              type="text"
              name="expiryDate"
              placeholder="Expiry Date"
              value={paymentDetails.expiryDate}
              onChange={handleChange}
              style={styles.inputField}
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={paymentDetails.cvv}
              onChange={handleChange}
              style={styles.inputField}
            />
            <button onClick={handlePayment} style={styles.submitBtn}>
              Submit Payment
            </button>
          </div>
        ) : (
          <div style={styles.successMessage}>
            {product ? (
              <>
                <p><strong>Product:</strong> {product.pname}</p>
                <p><strong>Price:</strong> ${product.price}</p>
              </>
            ) : (
              <>
                <h3>Cart Items</h3>
                {cartItems.map(item => (
                  <div key={item.id}>
                    <p><strong>Product:</strong> {item.pname}</p>
                    <p><strong>Price:</strong> ${item.price}</p>
                  </div>
                ))}
                <p><strong>Total:</strong> ${cartItems.reduce((total, item) => total + item.price, 0)}</p>
              </>
            )}
            <div style={styles.paymentSuccess}>Payment Successful! Thank you for your purchase.</div>
            <button onClick={handleContinueShopping} style={styles.continueBtn}>
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundImage: `url(${farmersImage})`, // Use the imported image
    backgroundSize: 'cover', // Ensures the image covers the full screen
    backgroundPosition: 'center', 
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
  },
  paymentForm: {
    maxWidth: '400px',
    margin: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  inputField: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  submitBtn: {
    padding: '10px 20px',
    backgroundColor: '#2d9cdb',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  successMessage: {
    textAlign: 'center',
    color: 'green',
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  paymentSuccess: {
    marginBottom: '20px',
    fontSize: '18px',
    color: '#4caf50',
  },
  continueBtn: {
    padding: '10px 20px',
    backgroundColor: '#2d9cdb',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default PaymentPage;
