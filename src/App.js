import React from "react";
import "./App.css";
import Counter from "./Counter";
import store from "./store/";

function App() {
  return (
    <div>
      <Counter store={store}> </Counter>
    </div>
  );
}

export default App;
