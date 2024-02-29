// import React from "react";
import { useCountdown } from "./hooks/useCountdown";
import PropTypes from "prop-types";

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
    return null;
  }

  //'ending to style when timer reaches zero
  //if I wanna use module.css
  //className={styles["display-counter"]}
  //className={days <= 0 ? styles["countdown-ending"] : styles["countdown"]}
  return (
    <div className="display-counter">
      <div className={days <= 0 ? "countdown ending" : "countdown"}>
        <p>{days}</p>
        <span>Days</span>
      </div>
      <p>:</p>
      <div className={hours <= 0 ? "countdown ending" : "countdown"}>
        <p>{hours}</p>
        <span>Hours</span>
      </div>
      <p>:</p>
      <div className={minutes <= 0 ? "countdown ending" : "countdown"}>
        <p>{minutes}</p>
        <span>Minutes</span>
      </div>
      <p>:</p>
      <div className={seconds <= 0 ? "countdown ending" : "countdown"}>
        <p>{seconds}</p>
        <span>Seconds</span>
      </div>
    </div>
  );
};

//eslint wouldn't accept my vaules without proptypes
CountdownTimer.propTypes = {
  targetDate: PropTypes.instanceOf(Date).isRequired,
};

export default CountdownTimer;
