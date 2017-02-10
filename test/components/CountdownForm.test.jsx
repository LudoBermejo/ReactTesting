import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import CountdownForm from 'CountdownForm';

describe('Countdown form component', () => {
  it('renders correctly', () => {
    function itRenders() {

    }
    const tree = renderer.create(<CountdownForm onStartCountdown={itRenders} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('not launch function if no value', () => {
    const onButtonClick = jest.fn();
    const countdownForm = mount(<CountdownForm onStartCountdown={onButtonClick} />);
    countdownForm.find('form').simulate('submit');
    expect(onButtonClick).not.toHaveBeenCalled();
  });

  it('not launch function if invalid value is sent', () => {
    const onButtonClick = jest.fn();
    const countdownForm = mount(<CountdownForm onStartCountdown={onButtonClick} />);
    const first = countdownForm.find('input');
    first.node.value = 'fff';
    first.simulate('change', first);
    countdownForm.find('form').simulate('submit');
    expect(onButtonClick).not.toHaveBeenCalled();
  });

  it('launch function if valid value is sent', () => {
    const onButtonClick = jest.fn();
    const countdownForm = mount(<CountdownForm onStartCountdown={onButtonClick} />);
    const first = countdownForm.find('input');
    first.node.value = 123;
    first.simulate('change', first);
    countdownForm.find('form').simulate('submit');
    expect(onButtonClick).toHaveBeenCalled();
   });
});
