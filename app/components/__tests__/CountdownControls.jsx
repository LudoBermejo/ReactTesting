import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import CountdownControls from 'CountdownControls';

describe('Countdown controls component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CountdownControls countdownStatus="started"
                                                    onStatusChange={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('Render buttons', () => {
    it('Button show pause if countdownStatus is started', () => {
      const countDownControls = shallow(<CountdownControls countdownStatus="started"
                                                           onStatusChange={() => {}} />);

      const buttons = countDownControls.find('button');
      expect(buttons.nodes[0].props.id).toBe('btnPause');
    });

    it('Button show resume if countdownStatus is paused', () => {
      const countDownControls = shallow(<CountdownControls countdownStatus="paused"
                                                           onStatusChange={() => {}} />);

      const buttons = countDownControls.find('button');
      expect(buttons.nodes[0].props.id).toBe('btnResume');
    });

    it('Only cancel button if not paused or resumed or started', () => {
      const countDownControls = shallow(<CountdownControls countdownStatus="random"
                                                           onStatusChange={() => {}} />);

      const buttons = countDownControls.find('button');
      expect(buttons.nodes.length).toBe(1);
    });
  })

  describe('Click buttons', () => {
    it('Launch paused if countdownStatus is started', () => {
      const falseStatusChange = jest.fn();
      const countDownControls = mount(<CountdownControls countdownStatus="started"
                                                         onStatusChange={falseStatusChange}
      />);

      const buttons = countDownControls.find('button').first();
      buttons.simulate('click');

      expect(falseStatusChange).toHaveBeenCalledWith('paused');
    });

    it('Launch falseStatusChange if countdownStatus is paused', () => {
      const falseStatusChange = jest.fn();
      const countDownControls = mount(<CountdownControls countdownStatus="paused"
                                                           onStatusChange={falseStatusChange}
      />);

      const buttons = countDownControls.find('button').first();
      buttons.simulate('click');

      expect(falseStatusChange).toHaveBeenCalledWith('started');
    });

    it('Launch falseStatusChange when click on button stop', () => {
      const falseStatusChange = jest.fn();
      const countDownControls = mount(<CountdownControls countdownStatus="random"
                                                           onStatusChange={falseStatusChange}
      />);

      const buttons = countDownControls.find('button').first();
      buttons.simulate('click');

      expect(falseStatusChange).toHaveBeenCalledWith('stopped');
    });
  })


});
