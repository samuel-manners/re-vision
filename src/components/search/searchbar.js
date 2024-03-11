import React, { useState } from 'react'


const SearchBar = () => {

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
                type="search"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput} />
                <button onClick={console.log('Button Pressed')}>Search</button>
        </div>
    )

};

export default SearchBar;