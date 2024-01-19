//App Imports
import React from 'react';
import './App.css';

//Component Imports
import Header from './components/header/header';
import MainScreen from './components/main/main';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainScreen/>
    </div>
  );
}

export default App;
