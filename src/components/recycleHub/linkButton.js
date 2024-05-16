import React from 'react'
import '../../components.css';

const LinkButton = () => {

    return (
        <div>
            <form action='https://www.recyclenow.com/recycling-locator'>
                <button className='linkButton' type="submit">Recycle Locally - Recycle Now</button>
            </form>
        </div>
    );
}

export default LinkButton;