//App Imports
import React from 'react';
import SearchBar from './search/navBar.js';
import '../components.css';

function App() {
  return (
    <div className="Header">
      <h1 className='pageHeader'>♻️Re-Vision♻️</h1>
      <h2 className='pageSubHeader'>AI Assisted Recycling</h2>
      <SearchBar/>
    </div>
  );
}

export default App;
