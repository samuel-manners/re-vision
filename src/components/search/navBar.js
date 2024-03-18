import React, { useState } from 'react'
import './search.css';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
        console.log('SearchBox in use');
    }

    /*
    const searchButton = () => {

    }
*/
    const homeButton = () => {
        tempDisableButtons();
        navigate('/');
    }

    /*
    const eduButton = () => {

    }
    */

    async function delay(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }

    const tempDisableButtons = async () => {
        setButtonDisabled(true);
        await delay(1000);
        setButtonDisabled(false);
    }



    return (
        <div>
            <input
                className='searchBar'
                type="search"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput} />
            <button className='navButton' onClick={tempDisableButtons} disabled={isButtonDisabled}>🔎</button>
            <button className='navButton' onClick={homeButton} disabled={isButtonDisabled}>🏠</button>
            <button className='navButton' onClick={tempDisableButtons} disabled={isButtonDisabled}>♻️</button>
        </div>
    )

};

export default SearchBar;