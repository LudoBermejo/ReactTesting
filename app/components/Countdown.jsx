import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';

export default class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSecondsToCount: 0
    };
    this.startCountDown = this.startCountDown.bind(this);
  }

  startCountDown(seconds) {
    this.setState({
      totalSecondsToCount: seconds
    });
  }

  render() {
    return (
      <div>
        <Clock totalSeconds={this.state.totalSecondsToCount} />
        <CountdownForm onStartCountdown={this.startCountDown} />
      </div>
    );
  }
}

