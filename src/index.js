import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/store";

// STORE -> GLOBALIZED STATE

// ACTION

// const increment = () => {
//   return {
//     type: "increment",
//   };
// };

// const decrement = () => {
//   return {
//     type: "decrement",
//   };
// };

// REDUCER
// A reducer's function signature is: (state, action) => newState

// const counterReducer = (state = { value: 0 }, action) => {
//   switch (action.type) {
//     case "increment":
//       return { value: state.value + 1 };
//     case "decrement":
//       return { value: state.value - 1 };
//     default:
//       return state;
//   }
// };
// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.

// let store = createStore(counterReducer);

// Display it in the console
// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.

// store.subscribe(() => console.log(store.getState()));

// DISPATCH
// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.

// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());
const reduxStore = store();

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
