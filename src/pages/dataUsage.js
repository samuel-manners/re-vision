//App Imports
import React from 'react';

function App() {
  return (
    <div className="gdprPage">
      <h1>♻️Re-Vision♻️</h1>
      <h3>How your date is used</h3>
      <p>Re-Vision currently does not host any user login features, therefore no personal or device information is collected by services</p>
      <p>When using Search and AI Vision features, data is temporarilly passed to backend services. Data sent only includes data used for search such as a text search prompt or image search request.</p>
      <p>Image data (from taking images for item detection features) is used within this application for the purpose of AI processing. Visual data is temporarilly sent to services for the purpose of AI image analyisis. This involves parsing images sent to Google services for processing.</p>
      <p>No information is stored, only temporarilly held for processing.</p>
    </div>
  );
}

export default App;