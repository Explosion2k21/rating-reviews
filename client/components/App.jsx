import React from "react";
import RatingStar from "./Rating.jsx";
import ScoreBar from "./ScoreBar.jsx";

const App = () => (
  <div>
    <div className="rating-container">
      <div>
        <RatingStar />
      </div>
      <div>
        <ScoreBar />
      </div>
    </div>
    <div className="review-container">
        
    </div>
  </div>
);
export default App;
