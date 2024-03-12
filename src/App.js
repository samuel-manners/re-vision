//App Imports
import './App.css';
import './stylesheet.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

//Component Imports
import Header from './components/header.js';
import BottomMenu from './components/bottomMenu.js';

//Page Imports
import MainScreen from './pages/main.js';
import Search from './pages/searchResults.js';


function App() {
  //To-Do
  //Add React Router - Ref: https://www.codeconcisely.com/posts/react-navigation/
  //Enable Search Results through API details
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/searchResults" element={<Search />} />
          <Route path="/searchResults/:image" element={<Search />} />
        </Routes>
        <BottomMenu/>
      </BrowserRouter>
    </div>
  );
}

export default App;
