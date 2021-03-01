const getRatingReducer = (state = [], action) => {
  if (action.type === "GET_RATING_AVERAGE") {
    return [...state, Object.assign(action.numbers)];
  } else {
    return state;
  }
};
export default getRatingReducer;
