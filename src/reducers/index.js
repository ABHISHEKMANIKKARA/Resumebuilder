import { combineReducers } from "redux";
import educationdetail from "./educationdetail.js";
import employementdetail from "./employementdetail.js";

const rootReducer = combineReducers({ educationdetail, employementdetail });
export default rootReducer;
