import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import FarmerDashboard from './pages/FarmerDashboard';
import BuyerDashboard from './pages/BuyerDashboard';
import PaymentPage from './pages/PaymentPage';
import CartPage from './pages/CartPage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import DeleteProduct from './pages/DeleteProduct';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/signup" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/Admin-Dashboard" element={<AdminDashboard />} />
                    <Route path="/Farmer-Dashboard" element={<Home />} />
                    <Route path="/Buyer-Dashboard" element={<BuyerDashboard />} />
                    <Route path="/payment" element={<PaymentPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/add-product" element={<AddProduct />} />delete-product
                    <Route path="/delete-product" element={<DeleteProduct />} />
                    
                </Routes>
            </div>
        </Router>
    );
}

export default App;
