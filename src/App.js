import React from "react";
import "./App.css";
import Counter from "./Counter";
import InputMirror from "./InputMirror";
import store from "./store/";

function App() {
  return (
    <div>
      <Counter store={store}> </Counter>

      <InputMirror store={store} />
    </div>
  );
}

export default App;
