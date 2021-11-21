import React from "react";
import PropTypes from "prop-types";

const Input = ({ input }) => {
  return <input placeholder={input.placeholder} type={input.type} />;
};

Input.propTypes = {
  input: PropTypes.shape({
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
};
export default Input;
