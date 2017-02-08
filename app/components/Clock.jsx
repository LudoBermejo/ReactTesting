import React from 'react';

String.prototype.padZero = function (len, c) {
  var s = '',
    c = c || '0',
    len = (len || 2) - this.length;
  while (s.length < len) s += c;
  return s + this;
};

Number.prototype.padZero = function (len, c) {
  return String(this).padZero(len, c);
};

export default class Clock extends React.Component {
  formatSeconds(totalSeconds) {
    if (!totalSeconds || typeof (totalSeconds) !== 'number') return false;
    const seconds = (totalSeconds % 60).padZero(2);
    const minutes = Math.floor(totalSeconds / 60).padZero(2);
    return `${minutes}:${seconds}`;
  }
  render() {
    return (
      <div>This is my clock</div>
    );
  }
}
