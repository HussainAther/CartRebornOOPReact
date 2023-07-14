import React from 'react';
import ItemList from './ItemList';
import UserCart from './UserCart';
import UserActions from './UserActions';
import InventoryManagement from './InventoryManagement';

const App = () => {
  return (
    <div>
      <h1>Shop System</h1>
      <ItemList />
      <UserCart />
      <UserActions />
      <InventoryManagement />
    </div>
  );
};

export default App;

