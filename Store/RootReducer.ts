import { combineReducers } from "redux";
import authSlice from "../Slices/AuthSlice";

const rootReducer = combineReducers({
  user: authSlice,
});
export default rootReducer;
