import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount} from 'enzyme';

import Timer from 'Timer';

describe('Timer component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Timer />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('Timer status', () => {
  it('start with status stopped', () => {
    const timer = shallow(<Timer />);
    expect(timer.instance().state.currentStatus).toBe('stopped');
  });

  it('Timer starts when status change to started', () => {
    jest.useFakeTimers();
    const timer = shallow(<Timer />);
    timer.instance().changeStatus('started');
    expect(timer.instance().state.currentStatus).toBe('started');
    expect(setInterval.mock.calls.length).toBe(1);
    expect(setInterval.mock.calls[0][1]).toBe(1000);
    jest.runOnlyPendingTimers();
    expect(timer.instance().state.currentSeconds).toBe(1);
  });

  it('Timer pauses when status change to paused', () => {
    jest.useFakeTimers();
    const timer = shallow(<Timer />);
    timer.instance().changeStatus('started');
    expect(timer.instance().state.currentStatus).toBe('started');
    expect(setInterval.mock.calls.length).toBe(1);
    expect(setInterval.mock.calls[0][1]).toBe(1000);
    jest.runOnlyPendingTimers();
    expect(timer.instance().state.currentSeconds).toBe(1);
    timer.instance().changeStatus('paused');
    jest.runOnlyPendingTimers();
    expect(timer.instance().state.currentSeconds).toBe(1);
    expect(timer.instance().timer).toBe(null);
  });

  it('Timer stops when status change to stopped', () => {
    jest.useFakeTimers();
    const timer = shallow(<Timer />);
    timer.instance().changeStatus('started');
    expect(timer.instance().state.currentStatus).toBe('started');
    expect(setInterval.mock.calls.length).toBe(1);
    expect(setInterval.mock.calls[0][1]).toBe(1000);
    jest.runOnlyPendingTimers();
    expect(timer.instance().state.currentSeconds).toBe(1);
    timer.instance().changeStatus('stopped');
    jest.runOnlyPendingTimers();
    expect(timer.instance().state.currentSeconds).toBe(0);
    expect(timer.instance().timer).toBe(null);
  });

});

