import './App.css';
// import React from 'react';
import CountdownTimer from './CountdownTimer';

export default function App() {
  const targetDate = new Date("2024-03-28T14:30:00");

  return (
    <div className='container'>
      <h1 className='title'>Countdown to Swedish Adventures</h1>
      <CountdownTimer targetDate={targetDate.getTime()} />
    </div>
  );
}

