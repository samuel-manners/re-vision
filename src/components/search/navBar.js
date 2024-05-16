import React, { useState } from 'react'
import '../../components.css';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    const searchButton = async () => {
        const results = await fetchData(searchInput);
        tempDisableButtons()
        if (results != null) {
            const jsonResults = JSON.stringify(results);
            const url = '/searchResults/' + jsonResults;
            navigate(url)
        } else {
            alert('Item not found');
        }
    }

    async function fetchData(query) {
        const url = "https://re-vision-searchapi.azurewebsites.net/recycling_database_api?searchType='Name'&name='" + query + "'";
        try {
            const response = await fetch(url, {
                method: 'GET'
            });

            if (response.status === 404) {
                //Returns no data if data couldn't be found
                return null;
            } else {
                const data = await response.json();
                return data;
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    //Buttons temporarily disable themselves whilst managing page
    //Then use the navigate functionality from the react-router-dom framework to change the page
    const homeButton = () => {
        tempDisableButtons();
        navigate('/');
    }

    const eduButton = () => {
        tempDisableButtons();
        navigate('/recycleHub');
    }

    async function delay(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }

    const tempDisableButtons = async () => {
        //Disables buttons for one second
        setButtonDisabled(true);
        await delay(250);
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
            <button className='navButton' onClick={searchButton} disabled={isButtonDisabled}>🔎</button>
            <button className='navButton' onClick={homeButton} disabled={isButtonDisabled}>📷</button>
            <button className='navButton' onClick={eduButton} disabled={isButtonDisabled}>♻️</button>
        </div>
    )
};

export default SearchBar;