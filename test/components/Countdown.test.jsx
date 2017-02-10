import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import Countdown from 'Countdown';

describe('Countdown component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Countdown onStartCountdown={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('startTimer', () => {
    it('should set state to started', () => {
      const countdown = shallow(<Countdown onStartCountdown={() => {}} />);
      countdown.instance().startCountDown(5);
      expect(countdown.state().totalSecondsToCount).toBe(5);
      expect(countdown.state().currentStatus).toBe('started');
    });

    it('should set state to started and countdown', () => {
      jest.useFakeTimers();
      const countdown = shallow(<Countdown onStartCountdown={() => {}} />);
      countdown.instance().startCountDown(5);
      expect(countdown.state().totalSecondsToCount).toBe(5);
      expect(countdown.state().currentStatus).toBe('started');
      expect(setInterval.mock.calls.length).toBe(1);
      expect(setInterval.mock.calls[0][1]).toBe(1000);
      // Fast-forward until all timers have been executed
      jest.runOnlyPendingTimers();

      expect(countdown.state().totalSecondsToCount).toBe(4);
    });

    it('should stop when reach 0', () => {
      jest.useFakeTimers();
      const countdown = shallow(<Countdown onStartCountdown={() => {}} />);
      countdown.instance().startCountDown(1);
      expect(countdown.state().totalSecondsToCount).toBe(1);
      expect(countdown.state().currentStatus).toBe('started');
      expect(setInterval.mock.calls.length).toBe(1);
      expect(setInterval.mock.calls[0][1]).toBe(1000);
      // Fast-forward until all timers have been executed
      jest.runOnlyPendingTimers();

      expect(countdown.state().totalSecondsToCount).toBe(0);
      expect(countdown.state().currentStatus).toBe('stopped');
    });
  });
});
