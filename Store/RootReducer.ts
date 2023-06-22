import { combineReducers } from "redux";
import authSlice from "../Slices/AuthSlice";

const rootReducer = combineReducers({
  data: authSlice,
  // tata: authSlice,
});
export default rootReducer;
