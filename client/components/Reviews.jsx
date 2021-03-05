import React, { useState, useEffect } from "react";
import axios from "axios";
import Rating from "@material-ui/lab/Rating";
import moment from "moment";
import AddReviews from "./AddReviews.jsx";

const Reviews = () => {
  // declaring states and there methods for controlling them
  const [count, setcount] = useState(2);
  const [allReviews, setallReviews] = useState([]);
  const [Reviews, setReviews] = useState([]);
  const [product, setproduct] = useState("");
  // use useEffect  to send request with count the that number from data
  useEffect(() => {
    axios
      .get(`http://206.81.26.204:3004/reviews/${count}`)
      .then(({ data }) => {
        setallReviews(data.results);
        setproduct(data.product);
        console.log("cccc====>", count);
        console.log("==>", data);
        console.log("produi -----------------------", data.product);
      })
      .catch((error) => console.log(error));
  }, [count]);
  // use useEffect to get all reviews
  useEffect(() => {
    axios
      .get(`http://206.81.26.204:3004/reviews`)
      .then(({ data }) => {
        setReviews(data.results);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {Reviews.length !== 0 ? (
        <div className="tile-container">
          <div className="top-review">
            <div>
              {Reviews.length} reviews,sorted by
              <span> revilances</span>
            </div>
          </div>
          {allReviews
            .map((review, i) => {
              return (
                <div className="reviews-tile" key={i}>
                  <div className="stars-user">
                    <div>
                      <Rating
                        className="rating-div"
                        name="read-only"
                        value={review.rating}
                        precision={0.1}
                        readOnly
                      />
                    </div>
                    <div className="user-name">
                      {review.reviewer_name},{moment(review.date).format("LL")}
                    </div>
                  </div>
                  {review.recommend ? (
                    <div className="recommend-product">
                      <i className="fa fa-check"></i> I recommend this product
                    </div>
                  ) : null}
                  <div className="summary">{review.summary}</div>
                  <div className="review-body">{review.body}</div>
                  {review.response !== null ? (
                    <div className="response-countainer">
                      <div className="response">Response :</div>
                      <div className="user-response">{review.response}</div>
                    </div>
                  ) : null}
                  <div className="helpful-div">
                    Helpful?
                    <div className="yes-div">
                      <a className="yes-ancer">Yes</a>
                      <div className="helpul-number">
                        ({review.helpfulness})
                      </div>
                      |
                    </div>
                    <a className="report-ancer">Report</a>
                  </div>
                </div>
              );
            })
            .reverse()}
        </div>
      ) : null}

      <div className="button-container">
        {allReviews.length !== 0 ? (
          <button
            className="more-reviews-button button"
            onClick={() => {
              setcount(count + 2);
            }}
          >
            MORE REVIEWS
          </button>
        ) : null}
        <AddReviews product={product} />
      </div>
    </div>
  );
};

export default Reviews;
