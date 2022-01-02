import { createStore, applyMiddleware } from "redux";
import allReducers from "../redux/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = () => {
  const middlewares = [thunk];
  const enhancers = composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(allReducers, enhancers);
  return store;
};

// export const store = createStore(
//   allReducers,
//   //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
