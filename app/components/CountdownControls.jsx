import React from 'react';

export default class CountdownControls extends React.Component {

  constructor(props) {
    super(props);
    this.renderStartStopButton = this.renderStartStopButton.bind(this);
  }

  renderStartStopButton(countdownStatus) {
    if (countdownStatus === 'started') {
      return (
        <button
          id="btnPause"
          className="button secondary"
          onClick={this.props.onClickPause()}
        >Pause</button>
      );
    } else if (countdownStatus === 'paused') {
      return (
        <button
          id="btnResume"
          className="button primary"
          onClick={this.props.onClickResume()}
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
          onClick={this.props.onClickStop()}
        >Clear</button>
      </div>
    );
  }
}

CountdownControls.propTypes = {
  countdownStatus: React.PropTypes.string.isRequired,
  onClickPause: React.PropTypes.func.isRequired,
  onClickResume: React.PropTypes.func.isRequired,
  onClickStop: React.PropTypes.func.isRequired
};
