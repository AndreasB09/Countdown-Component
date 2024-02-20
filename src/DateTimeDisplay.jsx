import React from "react";
import PropTypes from "prop-types";

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? "countdown danger" : "countdown"}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

DateTimeDisplay.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.string.isRequired,
  isDanger: PropTypes.bool.isRequired,
};

export default DateTimeDisplay;