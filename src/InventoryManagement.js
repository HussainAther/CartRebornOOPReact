import React, { useState } from 'react';
import axios from 'axios';

const InventoryManagement = () => {
  const [itemId, setItemId] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAddStock = async () => {
    try {
      await axios.post(`/api/inventory/${itemId}/stock`, { quantity }); // Replace with your backend API endpoint
      console.log('Stock added');
      setItemId('');
      setQuantity('');
    } catch (error) {
      console.error('Error adding stock:', error);
    }
  };

  const handleMarkOutOfStock = async () => {
    try {
      await axios.put(`/api/inventory/${itemId}/out-of-stock`); // Replace with your backend API endpoint
      console.log('Item marked as out of stock');
      setItemId('');
    } catch (error) {
      console.error('Error marking item as out of stock:', error);
    }
  };

  return (
    <div>
      <h2>Inventory Management</h2>
      <label>
        Item ID:
        <input type="text" value={itemId} onChange={(e) => setItemId(e.target.value)} />
      </label>
      <label>
        Quantity:
        <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </label>
      <button onClick={handleAddStock}>Add Stock</button>
      <button onClick={handleMarkOutOfStock}>Mark as Out of Stock</button>
    </div>
  );
};

export default InventoryManagement;

