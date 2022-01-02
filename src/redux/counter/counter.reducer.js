import { funcLoadCounts } from "./counter.action";

//for reduxthunk
// const initialState = {
// counter: null,
// };

const initialState = 0;

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    // return state + action.payLoad;
    case "decrement":
      return state - 1;
    // for react-thunk
    case funcLoadCounts:
      return action.payLoad;
    default:
      return state;
  }
};

// for react-thunk
export const saveCounts = () => async (dispatch, getState) => {
  const counters = getState();
  await fetch("http://localhost:3000", {
    method: "POST",
    headers: {
      Accept: "application/json",
      Content: "application/json",
    },
    body: JSON.stringify(counters),
  });
  alert("success");
  console.log(counters);
};

export const loadCounts = () => async (dispatch, getState) => {
  const countLoader = await fetch("http://localhost:3000").then((res) =>
    res.json()
  );
  console.log(countLoader);
  // dispatch(initialState.counter(countLoader));
  dispatch(funcLoadCounts(countLoader));
};
