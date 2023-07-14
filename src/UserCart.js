import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await axios.get('/api/cart'); // Replace with your backend API endpoint
      setCartItems(response.data.items);
      setCartTotal(response.data.total);
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
              <hr />
            </div>
          ))}
          <p>Total: ${cartTotal}</p>
        </div>
      )}
    </div>
  );
};

export default UserCart;

