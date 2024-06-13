import './App.css';
// import React from 'react';
import CountdownTimer from './CountdownTimer';

export default function App() {
  //set time to countdown
  const targetDate = new Date("2024-06-13T15:00:00");

  return (
    <div className='container'>
      <h1 className='title'>Countdown: Summer Party!</h1>
      <CountdownTimer targetDate={targetDate.getTime()} />
    </div>
  );
}

