import { combineReducers } from "redux";
import User from "./user_reducer";
import Upload from "./upload_reducer";

const rootReducer = combineReducers({
  User,
  Upload,
});

export default rootReducer;
