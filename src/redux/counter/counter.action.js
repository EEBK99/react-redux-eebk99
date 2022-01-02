export const funcIncrement = () => {
  return {
    type: "increment",
    // payLoad: num,
  };
};

export const funcDecrement = () => {
  return {
    type: "decrement",
  };
};

// for react-thunk
export const funcLoadCounts = (load) => {
  return {
    type: "funcLoadCounts",
    payLoad: load,
  };
};
