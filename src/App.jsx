import './App.css';
// import React from 'react';
import CountdownTimer from './CountdownTimer';

export default function App() {
  //set time to countdown
  const targetDate = new Date("2024-09-19T00:00:00");

  return (
    <div className='container'>
      <h1 className='title'>Countdown : Talk like a Pirate Day!</h1>
      <CountdownTimer targetDate={targetDate.getTime()} />
    </div>
  );
}

