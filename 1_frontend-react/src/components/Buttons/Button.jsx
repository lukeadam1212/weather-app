import React from "react";
import PropTypes from "prop-types";

const Button = ({ button }) => {
  return (
    <button onClick={button.action} type={button.type}>
      {button.text}
    </button>
  );
};

Button.propTypes = {
  button: PropTypes.shape({
    action: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};

export default Button;
