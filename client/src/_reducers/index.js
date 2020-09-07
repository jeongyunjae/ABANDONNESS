import { combineReducers } from "redux";
import user from "./user_reducer";
import upload from "./upload_reducer";

const rootReducer = combineReducers({
  user,
  upload,
});

export default rootReducer;
