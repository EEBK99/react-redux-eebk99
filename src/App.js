// import logo from "./logo.svg";
// import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { funcIncrement, funcDecrement } from "./redux/counter/counter.action";
import { saveCounts, loadCounts } from "./redux/counter/counter.reducer";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  // for redux-thunk
  const onSave = () => {
    dispatch(saveCounts());
  };

  const onLoad = () => {
    dispatch(loadCounts());
  };

  return (
    <div className="App">
      <h1>React-Redux and React-thunk</h1>

      <h2>Counter {counter}</h2>

      {/* <button onClick={() => dispatch(funcIncrement(5))}> + </button> */}
      <button onClick={() => dispatch(funcIncrement())}> + </button>
      <button onClick={() => dispatch(funcDecrement())}> - </button>

      {/* for redux-thunk */}
      <button onClick={onSave}> SAVE </button>
      <button onClick={onLoad}> LOAD </button>

      {isLogged ? <h3>Valuable information I shouldn't see</h3> : " "}
    </div>
  );
}

export default App;
