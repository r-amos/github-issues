import { combineReducers } from "redux";
import issuesReducer from "./issues";
import issueReducer from "./issue";

const rootReducer = combineReducers({ issues: issuesReducer, issue: issueReducer });

export default rootReducer;
