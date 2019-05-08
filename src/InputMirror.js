import React from "react";

function InputMirror(props) {
  return (
    <div>
      <input value={props.inputValue} />
      <p>{props.inputValue}</p>
    </div>
  );
}

export default InputMirror;
