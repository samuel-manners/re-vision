import React from 'react';
import { useCollapse } from 'react-collapsed';
//CodeRef:

function Collapsible() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return (
        <div className="collapsible">
            <div className="header" {...getToggleProps()}>
                {isExpanded ? 'Collapse Content' : 'Identifying Recycling'}
            </div>
            <div {...getCollapseProps()}>
                <div className='content'>
                    <h3>Identifying Recycling</h3>
                    <p>Most items which are recyclable come with tags on their packaging informing you how to recycle. Here is a guide to some common recycling markers.</p>
                    <h4>Knowing your recycling symbols:</h4>
                    <div className='RecycleCard'>
                        <h4>Recycle</h4>
                        <img src='https://www.recyclenow.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ft5gtctpjc8ne%2F2mHKN6BQlq48CmQ8TrI7fL%2F887f43e1f28099851d3a51b50a8274cf%2FRecycle.jpg&w=384&q=75' alt='Recycle Symbol' />
                        <p>This label is applied to packaging collected by 75% or more of UK local authorities and then sorted, processed and recycled into new packaging or products.</p>
                    </div>
                    <div className='RecycleCard'>
                        <h4>Recycle | Rinse</h4>
                        <img src='https://www.recyclenow.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ft5gtctpjc8ne%2F2w4X4CvED59yi03MfUU5G8%2F275cd6a6d50e88f7808e8c5e452d87b8%2FRinse-Recycle.jpg&w=384&q=75' alt='Recycle Symbol' />
                        <p>Rinsing recyclable packaging, like yoghurt pots and soup tins, ensures that any food or product residue doesn’t contaminate other materials, particularly if they are collected together with paper.</p>
                    </div>
                    <div className='RecycleCard'>
                        <h4>Recycle | Rinse | Lid on</h4>
                        <img src='https://www.recyclenow.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ft5gtctpjc8ne%2F2mHKN6BQlq48CmQ8TrI7fL%2F887f43e1f28099851d3a51b50a8274cf%2FRecycle.jpg&w=384&q=75' alt='Recycle Symbol' />
                        <p>Caps and lids under 40mm in diameter are too small to be captured for recycling, they fall through the holes in the screens at the sorting facilty. If you see this label, putting the lid back on the bottle packaging will help it to be captured and recycled.</p>
                    </div>
                    <div className='RecycleCard'>
                        <h4>Recycle with bags at large supermarkets | Don't recycle at home</h4>
                        <img src='https://www.recyclenow.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ft5gtctpjc8ne%2F2mHKN6BQlq48CmQ8TrI7fL%2F887f43e1f28099851d3a51b50a8274cf%2FRecycle.jpg&w=384&q=75' alt='Recycle Symbol' />
                        <p>You can see this label on plastic wrapping such as bread bags, fruit and veg bags, crisp packets and chocolate wrappers. You can recycle this type of packaging at recycling points in selected supermarkets.</p>
                    </div>
                    <div className='RecycleCard'>
                        <h4>Recycle | Bottle Cap on | Don't Recycle | Remove Sleeve</h4>
                        <img src='https://www.recyclenow.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ft5gtctpjc8ne%2F1v8zZJYe9Imif9i8E3obkb%2F8f81a293e2c11c2987b2576e70cfe395%2FCap-On-and-Remove-Sleeve.jpg&w=640&q=75' alt='Recycle Symbol' />
                        <p>Some packaging components need separating before you dispose of them. You may see a label like this on packaging where a sleeve, film or liner can be easily removed from the main packaging item. In this case, the sleeve is removed from a bottle by pulling a perforated strip, the bottle can be recycled but the sleeve goes in the rubbish.</p>
                    </div>
                    <div className='RecycleCard'>
                        <h4>Don't Recycle</h4>
                        <img src='https://www.recyclenow.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ft5gtctpjc8ne%2F1qeZYTKb1rmHj2MRau2v1Y%2Fa273a20744e8fbe9319c5601a72c9b90%2FDont-Recycle.jpg&w=384&q=75' alt='Recycle Symbol' />
                        <p>This label is applied to packaging collected by less than 50% of UK local authorities and/or is not able to be sorted, processed and recycled into new packaging or products.</p>
                    </div>
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

//https://www.recyclenow.com/recycling-locator?rlw-initial-path=local-authority/search