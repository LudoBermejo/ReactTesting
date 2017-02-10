import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import TimerControls from 'TimerControls';

describe('Timer controls component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TimerControls
      timerStatus="started"
      onStatusChange={() => {}}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('it shows valid buttons depending on status', () => {
    it('renders start button if status is stopped', () => {
      const controls = shallow(<TimerControls
        timerStatus="stopped"
        onStatusChange={() => {}}
      />);

      const button = controls.find('button').first();

      expect(button.props().id).toBe('btnStart');
    });
    it('renders pause button if status is started', () => {
      const controls = shallow(<TimerControls
        timerStatus="started"
        onStatusChange={() => {}}
      />);

      const button = controls.find('button').first();

      expect(button.props().id).toBe('btnPause');
    });
    it('renders stop button if status is not valid', () => {
      const controls = shallow(<TimerControls
        timerStatus="random"
        onStatusChange={() => {}}
      />);

      const button = controls.find('button').first();

      expect(button.props().id).toBe('btnStop');
    });

  });

  describe('it calls to change status when button is clicked', () => {
    it('calls to change status with started when start button is clicked', () => {
      const mockCall = jest.fn();

      const controls = mount(<TimerControls
        timerStatus="stopped"
        onStatusChange={mockCall}
      />);

      const button = controls.find('button').first();
      expect(button.props().id).toBe('btnStart');

      button.simulate('click');

      expect(mockCall).toHaveBeenCalledWith('started');
    });

    it('calls to change status with paused when pause button is clicked', () => {
      const mockCall = jest.fn();

      const controls = mount(<TimerControls
        timerStatus="started"
        onStatusChange={mockCall}
      />);

      const button = controls.find('button').first();
      expect(button.props().id).toBe('btnPause');

      button.simulate('click');

      expect(mockCall).toHaveBeenCalledWith('paused');
    });

    it('calls to change status with stopped when stop button is clicked', () => {
      const mockCall = jest.fn();

      const controls = mount(<TimerControls
        timerStatus="random"
        onStatusChange={mockCall}
      />);

      const button = controls.find('button').first();
      expect(button.props().id).toBe('btnStop');

      button.simulate('click');

      expect(mockCall).toHaveBeenCalledWith('stopped');
    });
  });

});
