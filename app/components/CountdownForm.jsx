import React from 'react';

export default class CountdownForm extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm(e) {
    e.preventDefault();
    const strSeconds = this.textInput.value;

    if (strSeconds.match(/^[0-9]+$/)) {
      this.props.onStartCountdown(parseInt(strSeconds, 10));
      this.textInput.value = '';
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <input
            type="text"
            placeholder="Enter type in seconds"
            ref={(input) => {
              this.textInput = input;
            }}
          />
          <button
            type="submit"
            className="button expanded"
          >Start</button>
        </form>
      </div>
    );
  }
}


CountdownForm.propTypes = {
  onStartCountdown: React.PropTypes.func.isRequired
};
