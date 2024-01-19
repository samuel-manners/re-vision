//App Imports
import React from 'react';
import './App.css';

//Component Imports
import Header from './components/header/header';
import MainScreen from './pages/main';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainScreen/>
    </div>
  );
}

export default App;
