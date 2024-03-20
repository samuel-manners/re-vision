import React from 'react';
import { useCollapse } from 'react-collapsed';


function Collapsible() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? 'Learn about Recycling Food Waste - Collapse' : 'Learn about Recycling Food Waste'}
        </div>
        <div {...getCollapseProps()}>
        <div className='content'>
            <h3>Managing Food Waste</h3>
            <p>Learn more about managing food waste and how to recycle food</p>
            <h4>What is Anerobic Digestion?</h4>
            <p>Hear from the success of Wales and learn about Anerobic Digestion</p>
            <iframe width="85%" height="315" src="https://www.youtube-nocookie.com/embed/e62n6b7_7iE?si=rbL1t8wW1yqWwKLU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="85%" height="315" src="https://www.youtube-nocookie.com/embed/hw-Uhq6Z3fs?si=K5LI-otlwhsR8lt-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h4>#StopTheWaste - World Food Programme</h4>
            <iframe width="85%" height="315" src="https://www.youtube-nocookie.com/embed/TVP3j7_W7og?si=BqYRp-CpSLaxlnol" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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