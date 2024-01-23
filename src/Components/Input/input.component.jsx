import React from "react";

const Input = ({
  Type,
  Placeholder,
  OnKeyPress,
  InputValue,
  OnChangeHandler,
  inputClass,
}) => {
  return (
    <div className="input-container">
      <input
        type={Type}
        placeholder={Placeholder}
        onKeyDown={OnKeyPress}
        value={InputValue}
        onChange={OnChangeHandler}
        className={`input ${inputClass}`}
        style={{ color: InputValue === "" ? "gray" : "black" }}
      />
    </div>
  );
};

export default Input;
