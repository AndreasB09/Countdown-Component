import './App.css';
// import React from 'react';
import CountdownTimer from './CountdownTimer';

export default function App() {
  const threeDaysInMs = 3 * 24 * 60 * 60 * 1000;
  const nowInMs = new Date().getTime();
  const dateAfterThreeDays = nowInMs + threeDaysInMs;

  return (
    <div>
      <h1>Countdown Timer</h1>
      <CountdownTimer targetDate={dateAfterThreeDays} />
    </div>
  );
}

