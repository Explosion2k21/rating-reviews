const getReviewsReducer = (state = [], action) => {
    if (action.type === "GET_REVIEWS") {
      return [...state, Object.assign(action.reviewsobj)];
    } else {
      return state;
    }
  };
  export default getReviewsReducer;
  