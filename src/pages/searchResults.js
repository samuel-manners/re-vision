//App Imports
import React from 'react';
import Search from '../components/search/Search.js';
import LinkButton from '../components/recycleHub/linkButton.js';
import { useParams } from "react-router-dom";

function SearchResultsPage() {
    
    const response = useParams();
    const arrayOfResponse = createArrayOfObjects(response.response);

    return (
        <div className="MainScreen">
            <Search details={arrayOfResponse} />
            <LinkButton/>
        </div>
    );
}

function createArrayOfObjects(jsonString) {
    try {
        const parsedData = JSON.parse(jsonString);
        if (!Array.isArray(parsedData)) {
            throw new Error('Input JSON should be an array.');
        }

        // Assuming each element in the array represents an object
        const arrayOfObjects = parsedData.map((item) => {
            return {
                name: item.name,
                description: item.description,
                recycleType: item.recycleType,
                brand: item.brand,
            };
        });

        return arrayOfObjects;
    } catch (error) {
        console.error('Error creating array of objects:', error.message);
        return null;
    }
}

export default SearchResultsPage;