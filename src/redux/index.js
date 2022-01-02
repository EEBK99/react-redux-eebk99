import { counterReducer } from "./counter/counter.reducer";
import isLoggedReducer from "./auth/isLogged.reducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: isLoggedReducer,
});

export default allReducers;
