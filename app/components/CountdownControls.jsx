import React from 'react';

export default class CountdownControls extends React.Component {

  constructor(props) {
    super(props);
    this.renderStartStopButton = this.renderStartStopButton.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
  }

  onChangeStatus(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    };
  }

  renderStartStopButton(countdownStatus) {
    if (countdownStatus === 'started') {
      return (
        <button
          id="btnPause"
          className="button secondary"
          onClick={this.onChangeStatus('paused')}
        >Pause</button>
      );
    } else if (countdownStatus === 'paused') {
      return (
        <button
          id="btnResume"
          className="button primary"
          onClick={this.onChangeStatus('started')}
        >Resume</button>
      );
    }
    return '';
  }

  render() {
    const { countdownStatus } = this.props;
    return (
      <div className="controls">
        { this.renderStartStopButton(countdownStatus) }
        <button
          id="btnClear"
          className="button alert"
          onClick={this.onChangeStatus('stopped')}
        >Clear</button>
      </div>
    );
  }
}

CountdownControls.propTypes = {
  countdownStatus: React.PropTypes.string.isRequired,
  onStatusChange: React.PropTypes.func.isRequired,
};
