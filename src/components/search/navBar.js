import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './search.css';

const SearchBar = () => {
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
        console.log('SearchBox in use');
    }



    return (
        <div>
            <input
                className='searchBar'
                type="search"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput} />
            <button className='navButton' onClick={console.log('Search Button Pressed')}>🔎</button>
            <button className='navButton' onClick={console.log('Home Button Pressed')}>🏠</button>
            <button className='navButton' onClick={console.log('Search Button Pressed')}>♻️</button>
        </div>
    )

};

export default SearchBar;