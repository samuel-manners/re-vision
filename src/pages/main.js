//App Imports
import React from 'react';
import Camera from '../components/main/Camera';
import Searchbox from '../components/main/SearchBar';

function App() {
  return (
    <div className="MainScreen">
      <Searchbox/>
      <Camera/>
    </div>
  );
}

export default App;
