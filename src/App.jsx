import './App.css';
// import React from 'react';
import CountdownTimer from './CountdownTimer';

export default function App() {
  const targetDate = new Date("2024-03-28T14:30:00");

  return (
    <div>
      <h1>Hey Universe</h1>
      <CountdownTimer targetDate={targetDate.getTime()} />
    </div>
  );
}

