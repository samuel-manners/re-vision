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
import DataUsage from './pages/dataUsage.js';

//App uses Router to enable single page web-application experience
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/searchResults/:response" element={<Search />} />
          <Route path='/recycleHub' element={<EducationHub/>} />
          <Route path="/error" element={<ErrorPage/>}/>
          <Route path="/dataUsage" element={<DataUsage/>}/>
        </Routes>
      </BrowserRouter>
      <a href="/dataUsage">How your data is used</a>
    </div>
  );
}

export default App;
