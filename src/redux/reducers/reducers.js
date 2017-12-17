import { combineReducers } from "redux";
import issuesReducer from "./issues";
import issueReducer from "./issue";
import pagesReducer from "./pages";
import repoReducer from "./repo";

const rootReducer = combineReducers({
  issues: issuesReducer,
  issue: issueReducer,
  numberOfPages: pagesReducer,
  repoURL: repoReducer
});

export default rootReducer;
