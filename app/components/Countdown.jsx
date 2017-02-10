import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';
import CountdownControls from 'CountdownControls';

export default class Countdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      totalSecondsToCount: 0,
      currentStatus: 'stopped'
    };
    this.startCountDown = this.startCountDown.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.renderFormOnlyIfStopped = this.renderFormOnlyIfStopped.bind(this);
    this.renderControlsIfNotStopped = this.renderControlsIfNotStopped.bind(this);
    this.onStatusChange = this.onStatusChange.bind(this);
    this.timer = null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentStatus !== prevState.currentStatus) {
      switch (this.state.currentStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({
            totalSecondsToCount: 0
          });
          this.stopTimer();
          break;
        case 'paused':
          this.stopTimer();
          break;
        default: break;
      }
    }
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  onStatusChange(newStatus) {
    this.setState({
      currentStatus: newStatus
    });
  }

  startCountDown(seconds) {
    this.setState({
      totalSecondsToCount: seconds,
      currentStatus: 'started'
    });
  }

  startTimer() {
    this.timer = setInterval(() => {
      let total = this.state.totalSecondsToCount;
      total = (total - 1 >= 0) ? total - 1 : 0;

      const state = {
        totalSecondsToCount: total
      };

      if (!total) {
        state.currentStatus = 'stopped';
      }

      this.setState(state);
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
    this.timer = null;
  }

  renderFormOnlyIfStopped() {
    if (this.state.currentStatus === 'stopped') {
      return <CountdownForm onStartCountdown={this.startCountDown} />;
    }
    return '';
  }

  renderControlsIfNotStopped() {
    if (this.state.currentStatus !== 'stopped') {
      return (
        <CountdownControls
          countdownStatus={this.state.currentStatus}
          onStatusChange={this.onStatusChange}
        />
      );
    }
    return '';
  }


  render() {
    return (
      <div>
        <Clock totalSeconds={this.state.totalSecondsToCount} />
        { this.renderFormOnlyIfStopped() }
        { this.renderControlsIfNotStopped(this.state.currentStatus) }
      </div>
    );
  }
}

