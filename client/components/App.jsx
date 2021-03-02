import React from "react";
import RatingStar from "./Rating.jsx";
import ScoreBar from "./ScoreBar.jsx";
import Reviews from "./Reviews.jsx";
const App = () => (
  <div className="body">
    <div className="rating-container">
      <div>
        <RatingStar />
      </div>
      <div>
        <ScoreBar />
      </div>
    </div>
    <div className="review-container">
      <Reviews />
    </div>
  </div>
);
export default App;
