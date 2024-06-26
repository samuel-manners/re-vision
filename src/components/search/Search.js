import React from 'react';
import Scroll from './Scroll.js';
import SearchList from './SearchList.js';

const Search = (details) => {

    const itemArray = Object.values(details);
    const arrayItems = itemArray[0];


    const filterItems = (details) => {
        return details
            .filter(item => item.name.toLowerCase())
            .map(item => ({ name: item.name, description: item.description, brand: item.brand, recycleType: item.recycleType }));
    };

    const filteredItems = filterItems(arrayItems);

    function searchList() {
        return (
            <Scroll>
                <h2>Recyclable Items:</h2>
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