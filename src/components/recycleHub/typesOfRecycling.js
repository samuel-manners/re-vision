import React from 'react';
import { useCollapse } from 'react-collapsed';


function Collapsible() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({ defaultExpanded: true });
    return (
        <div className="collapsible">
            <div className="header" {...getToggleProps()}>
                {isExpanded ? 'Collapse' : 'Types of Recycling'}
            </div>
            <div {...getCollapseProps()}>
                <div className='content'>
                    <h3>Types of Recycling:</h3>
                    <p>Knowing your recycling types will help you to know how to recycle best. Remember you can use Re-Visions search and AI Vision features to help you.</p>
                    <h4>Recycling Types and ways to recycle:</h4>
                    <ul>
                        <li>Metals - Most regions offer metal recycling (e.g. canned goods, beverage cans) </li>
                        <li>Plastics - Most regions offer plastic recycling (e.g. plastic bottles, food packaging)</li>
                        <li>Paper & Cardboard - #SaveTheTrees: Most regions offer Paper & Cardboard recycling</li>
                        <li>Shredded Paper - Some places offer either dropoff or curbside recycling for shredded paper.</li>
                        <li>Clothes - These could be donated to a charity shop or clothes bank. Some can even be resold!</li>
                        <li>Working Electrical Items - Some options include certain charity shops, trading in or selling the item.</li>
                        <li>Broken Electrical Items - Accepted at most recycling centres, some areas offer curbside collection!</li>
                        <li>Food - Is food recycling available in your area? Could you add it to your own or a community compost bin?</li>
                        <li>Furniture - This can be donated to certain charity shops, put up on online marketplaces or take to a recycling centre</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
function App() {
    return (
        <Collapsible />
    );
}
export default App;