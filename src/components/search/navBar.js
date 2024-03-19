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

    const searchButton = async () => {
        const results = await fetchData(searchInput);
        tempDisableButtons()
        if (results != null) {
            const jsonResults = JSON.stringify(results);
            const url = '/searchResults/' + jsonResults;
            navigate(url)
          } else{
            navigate('/error');
          }
    }

    async function fetchData(query) {
        const url = "https://re-vision-searchapi.azurewebsites.net/recycling_database_api?searchType='Name'&name='" + query + "'";
        try {
            const response = await fetch(url, {
                method: 'GET'
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }




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
        //Disabled buttons for one second
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