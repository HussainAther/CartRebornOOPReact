import React, { useState } from 'react';
import axios from 'axios';

const UserActions = () => {
  const [itemId, setItemId] = useState('');

  const handleAddToCart = async () => {
    try {
      await axios.post(`/api/cart/${itemId}`); // Replace with your backend API endpoint
      console.log('Item added to cart');
      setItemId('');
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  const handleRemoveFromCart = async () => {
    try {
      await axios.delete(`/api/cart/${itemId}`); // Replace with your backend API endpoint
      console.log('Item removed from cart');
      setItemId('');
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  return (
    <div>
      <h2>User Actions</h2>
      <label>
        Item ID:
        <input type="text" value={itemId} onChange={(e) => setItemId(e.target.value)} />
      </label>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={handleRemoveFromCart}>Remove from Cart</button>
    </div>
  );
};

export default UserActions;

