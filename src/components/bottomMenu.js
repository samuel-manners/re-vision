//App Imports
import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="Bottom-Menu">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/searchResults">Search Results</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
