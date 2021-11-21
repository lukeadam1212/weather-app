import React from "react";
import PropTypes from "prop-types";

const Textarea = ({ textarea }) => {
  return <textarea name={textarea.name}>{textarea.text}</textarea>;
};

Textarea.propTypes = {
  textarea: PropTypes.shape({
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};

export default Textarea;
