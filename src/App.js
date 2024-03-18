//App Imports
import './App.css';
import './stylesheet.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

//Component Imports
import Header from './components/header.js';

//Page Imports
import MainScreen from './pages/main.js';
import Search from './pages/searchResults.js';
import EducationHub from './pages/recycleHub.js';
import ErrorPage from './pages/errorPage.js';


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
          <Route path="/searchResults/:image" element={<Search />} />
          <Route path='/recycleHub' element={<EducationHub/>} />
          <Route path="/error" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
