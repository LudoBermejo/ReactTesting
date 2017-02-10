import React from 'react';

export default class TimerControls extends React.Component {

  constructor(props) {
    super(props);
    this.renderPlayOrStopButton = this.renderPlayOrStopButton.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
  }

  changeStatus(status) {
    return () => {
      this.props.onStatusChange(status);
    };
  }

  renderPlayOrStopButton() {
    if (this.props.timerStatus === 'started') {
      return (
        <button
          className="button principal"
          id="btnPause"
          onClick={this.changeStatus('paused')}
        >Stop</button>
      );
    } else if (this.props.timerStatus === 'stopped' || this.props.timerStatus === 'paused') {
      return (
        <button
          className="button primary"
          id="btnStart"
          onClick={this.changeStatus('started')}
        >Start</button>
      );
    }
    return '';
  }

  render() {
    return (
      <div className="controls">
        { this.renderPlayOrStopButton() }
        <button
          className="button secondary"
          id="btnStop"
          onClick={this.changeStatus('stopped')}
        >Clear</button>
      </div>
    );
  }
}

TimerControls.propTypes = {
  timerStatus: React.PropTypes.string.isRequired,
  onStatusChange: React.PropTypes.func.isRequired
};
