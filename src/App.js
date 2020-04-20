import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductsList from './component/ProductsList';

function App() {
  return (
    <div className="App">
      <ProductsList
        productTitle="Grocery Products"
      />
    </div>
  );
}

export default App;
