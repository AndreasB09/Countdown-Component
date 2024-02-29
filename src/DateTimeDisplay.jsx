// import React from "react";
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

//along with this in contdown timer
// const DisplayCounter = ({ days, hours, minutes, seconds }) => {

//   return (
//     <div className="display-counter">
//       <DateTimeDisplay value={days} type={"Days"} isDanger={days} />
//       <p>:</p>
//       <DateTimeDisplay value={hours} type={"Hours"} isDanger={hours} />
//       <p>:</p>
//       <DateTimeDisplay value={minutes} type={"Minutes"} isDanger={minutes} />
//       <p>:</p>
//       <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={seconds} />
//       <p>:</p>
//     </div>
//   );
// };

// DisplayCounter.propTypes = {
//   days: PropTypes.number.isRequired,
//   hours: PropTypes.number.isRequired,
//   minutes: PropTypes.number.isRequired,
//   seconds: PropTypes.number.isRequired,
// };