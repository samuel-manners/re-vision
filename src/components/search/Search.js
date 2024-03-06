import React, { useState } from 'react';
import Scroll from './Scroll.js';
import SearchList from './SearchList.js';

const Search = (details) => {

    const [searchField, setSearchField] = useState("");
    const itemArray = Object.values(details);
    const arrayItems = itemArray[0];


    const filterItems = (details, searchField) => {
        return details
            .filter(item => item.name.toLowerCase())
            .map(item => ({ name: item.name, description: item.description }));
    };

    const filteredItems = filterItems(arrayItems, searchField);

    const handleChange = e => {
        setSearchField(e.target.value);
    };

    function searchList() {
        return (
            <Scroll>
                <SearchList filteredItems={filteredItems} />
            </Scroll>
        );
    }

    return (
        <div className="garamond">
            {searchList()}
        </div>
    );
}

export default Search;