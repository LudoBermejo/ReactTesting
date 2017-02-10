import React from 'react';
import Clock from 'Clock';
import TimerControls from 'TimerControls';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStatus: 'stopped',
      currentSeconds: 0
    };
    this.timer = null;
    this.changeStatus = this.changeStatus.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentStatus !== this.state.currentStatus) {
      switch (this.state.currentStatus) {
        case 'stopped':
          this.setState({
            currentSeconds: 0
          });
          this.stopTimer();
          break;
        case 'started':
          this.startTimer();
          break;
        case 'paused':
          this.stopTimer();
          break;
        default: break;
      }
    }
  }

  startTimer() {
    if (!this.timer) {
      this.timer = setInterval(() => {
        const { currentSeconds } = this.state;
        this.setState({currentSeconds: currentSeconds + 1})
      }, 1000);
    }
  }

  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  changeStatus(status) {
    this.setState({
      currentStatus: status
    });
  }

  render() {
    const { currentSeconds, currentStatus } = this.state;
    return (
      <div>
        <Clock totalSeconds={currentSeconds} />
        <TimerControls
          timerStatus={currentStatus}
          onStatusChange={this.changeStatus}
        />
      </div>
    );
  }

}
