import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import CountdownForm from 'CountdownForm';

describe('Countdown form component', () => {
  it('renders correctly', () => {
    function itRenders() {

    }
    const tree = renderer.create(<CountdownForm onStartCountdown={itRenders} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('not launch function if invalid value is sent', () => {
    const onButtonClick = jest.fn();

    const countdownForm = shallow(<CountdownForm onStartCountdown={onButtonClick} />);
    countdownForm.find('button').simulate('click');
    expect(onButtonClick).not.toHaveBeenCalled();
  });

  it('not launch function if valid value is sent', () => {
    const onButtonClick = jest.fn();

    const countdownForm = mount(<CountdownForm onStartCountdown={onButtonClick} />);
    console.log(countdownForm.ref('input').get(0));
    console.log(countdownForm.find('input').get(0).value);

    countdownForm.find('button').simulate('click');
    expect(onButtonClick).toHaveBeenCalled();
   });
});
