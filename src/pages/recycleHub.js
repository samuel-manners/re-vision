//App Imports
import React from 'react';
import Scroll from '../components/search/Scroll.js';
import BenefitsOfRecycling from '../components/recycleHub/benefitsOfRecycling.js';
import IdentifyingRecyling from '../components/recycleHub/identifyingRecyling.js';
import ReuseReduceRecycle from '../components/recycleHub/recyclingAlternatives.js';
import TypesOfRecycling from '../components/recycleHub/typesOfRecycling.js';
import ManagingFoodWaste from '../components/recycleHub/managingFoodWaste.js';
import ImpactOfRecycling from '../components/recycleHub/impactOfRecycling.js';
import LinkButton from '../components/recycleHub/linkButton.js';


function App() {
  return (
    <Scroll>
      <div className="RecycleHub">
        <h3>Recycle Hub</h3>
        <p>Find out how to get more engaged in recycling here!</p>
      </div>
      <TypesOfRecycling/>
      <ReuseReduceRecycle/>
      <BenefitsOfRecycling/>
      <ImpactOfRecycling/>
      <IdentifyingRecyling/>
      <ManagingFoodWaste/>
      <LinkButton/>
    </Scroll>
  );
}

export default App;