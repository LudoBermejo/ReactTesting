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

  static propTypes: {
    totalSeconds: React.PropTypes.number.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      currentSeconds: props.totalSeconds
    }
  }
  formatSeconds(totalSeconds) {
    if (typeof (totalSeconds) !== 'number') return false;
    const seconds = (totalSeconds % 60).padZero(2);
    const minutes = Math.floor(totalSeconds / 60).padZero(2);
    return `${minutes}:${seconds}`;
  }
  render() {
    const totalSeconds = this.formatSeconds(this.props.totalSeconds);
    return (
      <div className="clock">
        <span className="clock-text">
          {totalSeconds}
        </span>
      </div>
    );
  }
}


