import React, { useState, useEffect } from "react";
import { Line } from "rc-progress";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const ScoreBar = () => {
  const [counter, setCount] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("/ratingBar")
      .then(({ data }) => {
        setCount(Object.values(data.ratings));
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="scorebars">
      <span className="scorebars-title">
        100% of reviews recommend this product
      </span>
      {counter
        ? counter
            .map((element, i) => {
              const all = counter.reduce((a, b) => {
                return a * 1 + 1 * b;
              }, 0);
              return (
                <div className="progressBar" key={i}>
                  <div className="bar-title"> {i + 1} stars</div>
                  <div className="oneBar">
                    <Line
                      percent={(element * 100) / all}
                      strokeWidth="1"
                      strokeColor="green"
                    />
                  </div>
                </div>
              );
            })
            .reverse()
        : null}
    </div>
  );
};

export default ScoreBar;