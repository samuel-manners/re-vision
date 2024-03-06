//App Imports
import './App.css';
import './stylesheet.css';
import React from 'react';

//Component Imports
import Header from './components/header/header.js';
import MainScreen from'./pages/main.js';
import Search from './components/search/Search.js';

const initialDetails = [
  { id: 1, name: "Coca-Cola Can", brand: "Coca-Cola", description: "Beverage Can"},
  { id: 2, name: "Diet Coke Can", brand: "Coca-Cola", description: "Beverage Can"},
  { id: 3, name: "Coca-Cola Bottle", brand: "Coca-Cola", description: "Plastic Beverage Bottle"},
  { id: 4, name: "Diet Coke Bottle", brand: "Coca-Cola", description: "Plastic Beverage Bottle"}
];

function App() {
  return (
    <div className="App">
      <Header/>
      <MainScreen/>
      <Search details={initialDetails}/>
    </div>
  );
}

export default App;
