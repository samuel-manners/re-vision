//App Imports
import React from 'react';
import Search from '../components/search/Search.js';

const initialDetails = [
    { id: 1, name: "Coca-Cola Can", brand: "Coca-Cola", description: "Beverage Can"},
    { id: 2, name: "Diet Coke Can", brand: "Coca-Cola", description: "Beverage Can"},
    { id: 3, name: "Coca-Cola Bottle", brand: "Coca-Cola", description: "Plastic Beverage Bottle"},
    { id: 4, name: "Diet Coke Bottle", brand: "Coca-Cola", description: "Plastic Beverage Bottle"}
  ];

function searchResultsPage() {

    return (
      <div className="MainScreen">
        <Search details={initialDetails}/>
      </div>
    );
  }
  
  export default searchResultsPage;