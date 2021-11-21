import React from "react";

const Input = ({ name, id, type, forValue, placeholder }) => {
  return (
    <>
      <label htmlFor={forValue}></label>
      <input placeholder={placeholder} type={type} id={id} name={name} />
    </>
  );
};
export default Input;
