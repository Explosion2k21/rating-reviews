const getRatingBarsReducer = (state = [], action) => {
    if (action.type === "GET_RATING_BARS") {
      return [...state, Object.assign(action.ratingobj)];
    } else {
      return state;
    }
  };
  export default getRatingBarsReducer;
  