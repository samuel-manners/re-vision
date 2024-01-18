//App Imports
import React from 'react';
import './App.css';

//Component Imports
import Logo from './components/header/Logo';
import Camera from './components/main/Camera';

function App() {
  return (
    <div className="App">
      <Logo/>
      <Camera/>
    </div>
  );
}

export default App;
