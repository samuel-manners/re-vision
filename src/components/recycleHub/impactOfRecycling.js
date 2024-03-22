import React from 'react';
import { useCollapse } from 'react-collapsed';


function Collapsible() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();;
    return (
        <div className="collapsible">
            <div className="header" {...getToggleProps()}>
                {isExpanded ? 'Collapse Content' : 'Impacts of Recycling'}
            </div>
            <div {...getCollapseProps()}>
                <div className='content'>
                    <h3>Impacts of Recycling</h3>
                    <h4>E-Waste:</h4>
                    <h5>BBC & CBS reports on E-Waste</h5>
                    <iframe width="90%" height="315" src="https://www.youtube-nocookie.com/embed/mFc80PhnU7w?si=SLj7qIsHbRCgq6Xt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="90%" height="315" src="https://www.youtube-nocookie.com/embed/4GtWGHvX-rk?si=7YSeiERILheJvJB0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <h4>Fast Fashion:</h4>
                    <h5>UN Enviroment Programme - Fast Fashion</h5>
                    <iframe width="90%" height="315" src="https://www.youtube-nocookie.com/embed/0v7f0KeNpv8?si=nmmPcn179nxNTQJc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <h5>BBC & ITV Fast Fashion Reports:</h5>
                    <iframe width="90%" height="315" src="https://www.youtube-nocookie.com/embed/7i0QMnz4ExY?si=sTF6T0EGUnNGn3Ht" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="90%" height="315" src="https://www.youtube-nocookie.com/embed/YnKEJprS3xM?si=5Z1LEycPNzDST1R5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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