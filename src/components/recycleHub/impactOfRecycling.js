import React from 'react';
import { useCollapse } from 'react-collapsed';


function Collapsible() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({ defaultExpanded: true });;
return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? 'Impact of Recycling - Collapse' : 'Impact of Recycling'}
        </div>
        <div {...getCollapseProps()}>
        <div className='content'>
            
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