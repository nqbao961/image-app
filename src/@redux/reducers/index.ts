import { combineReducers } from "redux";
import imageReducer from "./image";
import appReducer from "./app";

const reducers = combineReducers({
  app: appReducer,
  images: imageReducer,
});

export default (state: any, action: any) => reducers(state, action);
