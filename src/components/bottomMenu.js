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
                </ul>
            </nav>
        </div>
    );
}

/*
<div className="btn-container">
                <button className='retake-button' onClick={retake}>Retake photo</button>
                <button className='send-button' onClick={sendPhoto}>Detect Items</button>
                <button className='capture-button' onClick={capture}>Capture photo</button>
            </div>
*/

export default App;
