import { combineReducers } from "redux";
import getRatingReducer from "../reducers/getRatingReducer.js";
import getRatingBarsReducer from "../reducers/getRatingBarsReducer.js";

const rootReducer = combineReducers({ getRatingReducer, getRatingBarsReducer });

export default rootReducer;
