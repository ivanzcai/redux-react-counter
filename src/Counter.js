import React, { Component } from "react";
import { connect } from "react-redux";
import store from "./store/";

function Counter(props) {
  console.log(props);
  return (
    <div>
      <h1>Hello : {props.name}</h1>
      <p>Counter: {props.count}</p>
      <button onClick={props.onIncrementClick}>Increment</button>

      <input onBlur={props.onBlurText} />
    </div>
  );
}

function mapStateToProps(state) {
  console.log("mapStateToProps", state);
  return {
    count: state.count,
    name: state.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementClick: () => {
      console.log("Btn clicked");
      const action = { type: "INCREMENT" };
      dispatch(action);
    },

    onBlurText: () => {
      const action = { type: "NAMECHANGE" };
      dispatch(action);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
