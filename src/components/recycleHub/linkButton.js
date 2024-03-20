import React from 'react'
import '../../components.css';
//Code Ref: https://www.w3docs.com/snippets/html/how-to-create-an-html-button-that-acts-like-a-link.html

const LinkButton = () => {

    return (
        <div>
            <form action='https://www.gov.uk/recycling-collections'>
                <button type="submit">Find out local recycling information - external 'gov.uk'</button>
            </form>
            <form action='https://www.recyclenow.com/recycling-locator'>
                <button type="submit">Find your local recycling centre - external 'recyclenow.com</button>
            </form>
        </div>
    );
}

export default LinkButton;