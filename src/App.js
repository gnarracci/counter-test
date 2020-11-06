import React from "react";
import CounterOne from "./components/counterOne";
import CounterTree from "./components/counterTree";
import CounterTwo from "./components/counterTwo";

const App = () => {
  return (
    <div>
      <h1>Counter Test</h1>
      <CounterOne />
      <CounterTwo />
      <CounterTree />
    </div>
  );
};

export default App;
