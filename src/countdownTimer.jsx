// import React from "react";
import { useCountdown } from "./hooks/useCountdown";
import DateTimeDisplay from "./DateTimeDisplay";
import PropTypes from "prop-types";
import styles from "./CountdownTimer.module.css"

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <TimeoutNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

const TimeoutNotice = () => {
  return (
    <div className="timeout-notice">
      <span>Timeout</span>
      <p>Select a time and date</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className={styles.showcounter}>
      <DateTimeDisplay value={days} type={"Days"} isDanger={days} />
      <p>:</p>
      <DateTimeDisplay value={hours} type={"Hours"} isDanger={hours} />
      <p>:</p>
      <DateTimeDisplay value={minutes} type={"Minutes"} isDanger={minutes} />
      <p>:</p>
      <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={seconds} />
      <p>:</p>
    </div>
  );
};

ShowCounter.propTypes = {
  days: PropTypes.number.isRequired,
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
};

CountdownTimer.propTypes = {
  targetDate: PropTypes.instanceOf(Date).isRequired,
};

export default CountdownTimer;
