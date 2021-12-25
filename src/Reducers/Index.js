import { combineReducers } from "redux";
import Reducer from "./Reducer";
import DetailReducer from "./DetailReducer";

const rootReducer = combineReducers({
  music: Reducer,
  details: DetailReducer,
});

export default rootReducer;
