import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/reducers";
import thunkMiddleware from "redux-thunk";

const Store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default Store;
