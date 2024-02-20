import React from "react";
import { useCountdown } from "./hooks/useCountdown";

const countdownTimer = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <TimeoutNotice />;
    } else {
        return (
            <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />
        );
    }
}