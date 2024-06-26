import React from 'react';
import { useCollapse } from 'react-collapsed';


function Collapsible() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();;
    return (
        <div className="collapsible">
            <div className="header" {...getToggleProps()}>
                {isExpanded ? 'Collapse Content' : 'Benefits of Recycling'}
            </div>
            <div {...getCollapseProps()}>
                <div className='content'>
                    <h3>Benefits of Recycling</h3>
                    <p>Some of the benefits of recycling include:</p>
                    <ul>
                        <li>Lowering Global Pollution</li>
                        <li>Preserving limited natural resources</li>
                        <li>Creating new jobs</li>
                        <li>Adding value to the Economy</li>
                    </ul>
                    <iframe width="85%" height="315" src="https://www.youtube-nocookie.com/embed/F2pyi_SUhgQ?si=sH8Fy_Lj1N51sm0y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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