import { combineReducers } from "redux";
import Reducer from "./Reducer";

const rootReducer = combineReducers({
  music: Reducer,
});

export default rootReducer;
