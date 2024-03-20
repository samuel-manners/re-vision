//App Imports
import React from 'react';
import Scroll from '../components/search/Scroll.js';
import ImpactOfRecycling from '../components/recycleHub/impactOfRecycling.js';
import IdentifyingRecyling from '../components/recycleHub/identifyingRecyling.js';
import RecyclingAlternatives from '../components/recycleHub/recyclingAlternatives.js';

import ManagingFoodWaste from '../components/recycleHub/managingFoodWaste.js';
import LinkButton from '../components/recycleHub/linkButton.js';


function App() {
  return (
    <Scroll>
      <div className="RecycleHub">
        <h3>Recycle Hub</h3>
        <p>Find out how to get more engaged in recycling here!</p>
      </div>
      <ImpactOfRecycling/>
      <IdentifyingRecyling/>
      <RecyclingAlternatives/>
      <ManagingFoodWaste/>
      <LinkButton/>
    </Scroll>
  );
}

export default App;