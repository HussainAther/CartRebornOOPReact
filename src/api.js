import axios from 'axios';

const API_BASE_URL = '/api'; // Replace with your backend API base URL

export const fetchItems = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/items`);
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};

export const addToCart = async (itemId) => {
  try {
    await axios.post(`${API_BASE_URL}/cart/${itemId}`);
    console.log('Item added to cart');
  } catch (error) {
    console.error('Error adding item to cart:', error);
    throw error;
  }
};

export const removeFromCart = async (itemId) => {
  try {
    await axios.delete(`${API_BASE_URL}/cart/${itemId}`);
    console.log('Item removed from cart');
  } catch (error) {
    console.error('Error removing item from cart:', error);
    throw error;
  }
};

export const addStock = async (itemId, quantity) => {
  try {
    await axios.post(`${API_BASE_URL}/inventory/${itemId}/stock`, { quantity });
    console.log('Stock added');
  } catch (error) {
    console.error('Error adding stock:', error);
    throw error;
  }
};

export const markOutOfStock = async (itemId) => {
  try {
    await axios.put(`${API_BASE_URL}/inventory/${itemId}/out-of-stock`);
    console.log('Item marked as out of stock');
  } catch (error) {
    console.error('Error marking item as out of stock:', error);
    throw error;
  }
};

