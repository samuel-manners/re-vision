import React from 'react';
import { useCollapse } from 'react-collapsed';


function Collapsible() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? 'Collapse Content' : 'Reuse, Reduce, Recycle'}
        </div>
        <div {...getCollapseProps()}>
        <div className='content'>
            <h3>Reuse, Reduce, Recycle:</h3>
            <p>We are slowly consumming more and more. As fashion gets faster and the age of mobile phone trash is amongst us, we must get smart on how we manage our resources and look at some of the alternatives to throwing away</p>
            <h4>Making Changes</h4>
            <p>We can all make changes in our lives to prevent the horrific impact that human consumption is creating.</p>
            <h5>Reduce your waste</h5>
            <p>Making changes like keeping our clothes for longer and opting to repair clothes instead of replacing them can make a huge difference. How we manage our waste is important, however how we manage our purchases also has a huge roll to play. Do you need a mobile phone upgrade right now, or could you hold onto your device for abit longer? By considering our purchases before making them, we can all reduce the amount of needless waste.</p>
            <h5>Reusing our Waste</h5>
            <p>Got old items like clothing or furniture? Consider a charity shop or clothing bank! Got an old electronic device thats still functioning? Try recycling shops such as CEX and get money back from your items!</p>
            <h5>Recycling Options</h5>
            <p>When your done with something, think about how you could provide it a new life. Many electronics companies will now offer you money off your device when you trade in your current device for recycling! Also, consider your local community itself. Posting items up for free like furniture that is slightly damaged on social media sites, you'll likely find someone with a passion for bringing life back to old goods!</p>
        </div>
        </div>
    </div>
    );
}
function App() {
    return (
    <Collapsible/>
    );
}
export default App;