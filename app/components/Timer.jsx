import React from 'react';
import Clock from 'Clock';

const Timer = () => (
  <div>
    <p>Timer component</p>
    <Clock totalSeconds={0} />
  </div>
);

module.exports = Timer;
