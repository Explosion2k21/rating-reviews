import { combineReducers } from "redux";
import getRatingReducer from "../reducers/getRatingReducer.js";
import getRatingBarsReducer from "../reducers/getRatingBarsReducer.js";
import getReviewsReducer from "../reducers/getReviewsReducer.js";
const rootReducer = combineReducers({ getRatingReducer, getRatingBarsReducer ,getReviewsReducer});

export default rootReducer;
    