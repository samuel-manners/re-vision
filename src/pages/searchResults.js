//App Imports
import React from 'react';
import Search from '../components/search/Search.js';
import { useParams } from "react-router-dom";


//import sendImageToAPI from '../components/functions/uploadImage.js';
//To-Do Send API Import

const initialDetails = [
    { id: 1, name: "Coca-Cola Can", brand: "Coca-Cola", description: "Beverage Can" },
    { id: 2, name: "Diet Coke Can", brand: "Coca-Cola", description: "Beverage Can" },
    { id: 3, name: "Coca-Cola Bottle", brand: "Coca-Cola", description: "Plastic Beverage Bottle" },
    { id: 4, name: "Diet Coke Bottle", brand: "Coca-Cola", description: "Plastic Beverage Bottle" }
];

const inputJson = '[{"UPC":null,"name":"Coca-Cola Can","description":"Beverage can","is_recyclable":1,"packaging_material":"Aluminum","brand":"The Coca-Cola Company"},{"UPC":null,"name":"Diet Coke Can","description":"Beverage Can","is_recyclable":1,"packaging_material":"Aluminium","brand":"The Coca-Cola Company"}]';

function SearchResultsPage() {
    
    const images = useParams();
    const arrayOfImages = createArrayOfObjects(images.image);
    console.log(arrayOfImages);


    return (
        <div className="MainScreen">
            <Search details={arrayOfImages} />
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
                UPC: item.UPC,
                name: item.name,
                description: item.description,
                is_recyclable: item.is_recyclable,
                packaging_material: item.packaging_material,
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