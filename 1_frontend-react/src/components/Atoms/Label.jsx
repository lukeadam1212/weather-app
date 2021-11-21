import React from "react";
import PropTypes from "prop-types";

const Label = ({ label }) => {
  return <label htmlFor={label.name}>{label.text}</label>;
};

Label.propTypes = {
  label: PropTypes.shape({
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};
export default Label;
