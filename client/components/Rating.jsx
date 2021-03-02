import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Rating from "@material-ui/lab/Rating";
import getRatingAverage from "../actions/getRatingAverage.js";
import axios from "axios";
const RatingStar = () => {
  const state = useSelector((state) => state.getRatingAverage);
  const [ratingVal, setRating] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("/rating")
      .then(({ data }) => {
        let average = 0;
        for (let i = 0; i < data.results.length; i++) {
          average += data.results[i].rating;
        }
        average = average / data.results.length;
        setRating(average);
        dispatch(getRatingAverage(average));
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="rating-star-container">
      <div className="rating-average">{ratingVal}</div>
      <div className="rating-stars">
        <Rating
          className="rating-div"
          name="read-only"
          value={ratingVal}
          precision={0.1}
          readOnly
        />
      </div>
    </div>
  );
};
export default RatingStar;
