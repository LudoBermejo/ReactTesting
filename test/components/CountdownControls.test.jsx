import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import CountdownControls from 'CountdownControls';

describe('Countdown form component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CountdownControls countdownStatus="started"
                                                    onClickPause={() => {}}
                                                    onClickResume={() => {}}
                                                    onClickStop={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('Render buttons', () => {
    it('Button show pause if countdownStatus is started', () => {
      const countDownControls = shallow(<CountdownControls countdownStatus="started"
                                                      onClickPause={() => {}}
                                                      onClickResume={() => {}}
                                                      onClickStop={() => {}} />);

      const buttons = countDownControls.find('button');
      expect(buttons.nodes[0].props.id).toBe('btnPause');
    });

    it('Button show resume if countdownStatus is paused', () => {
      const countDownControls = shallow(<CountdownControls countdownStatus="paused"
                                                           onClickPause={() => {}}
                                                           onClickResume={() => {}}
                                                           onClickStop={() => {}} />);

      const buttons = countDownControls.find('button');
      expect(buttons.nodes[0].props.id).toBe('btnResume');
    });

    it('Only cancel button if not paused or resumed or started', () => {
      const countDownControls = shallow(<CountdownControls countdownStatus="random"
                                                           onClickPause={() => {}}
                                                           onClickResume={() => {}}
                                                           onClickStop={() => {}} />);

      const buttons = countDownControls.find('button');
      expect(buttons.nodes.length).toBe(1);
    });
  })

  describe('Click buttons', () => {
    it('Launch onClickPause if countdownStatus is started', () => {
      const onClickPause = jest.fn();
      const countDownControls = shallow(<CountdownControls countdownStatus="started"
                                                           onClickPause={onClickPause}
                                                           onClickResume={() => {
                                                           }}
                                                           onClickStop={() => {
                                                           }}/>);

      const buttons = countDownControls.find('button').first();
      buttons.simulate('onClick');

      expect(onClickPause).toHaveBeenCalled();
    });

    it('Launch onClickResume if countdownStatus is paused', () => {
      const onClickResume = jest.fn();
      const countDownControls = shallow(<CountdownControls countdownStatus="paused"
                                                           onClickResume={onClickResume}
                                                           onClickPause={() => {
                                                           }}
                                                           onClickStop={() => {
                                                           }}/>);

      const buttons = countDownControls.find('button').first();
      buttons.simulate('onClick');

      expect(onClickResume).toHaveBeenCalled();
    });

    it('Launch onClickStop when click on button stop', () => {
      const onClickStop = jest.fn();
      const countDownControls = shallow(<CountdownControls countdownStatus="random"
                                                           onClickStop={onClickStop}
                                                           onClickPause={() => {
                                                           }}
                                                           onClickResume={() => {
                                                           }}/>);

      const buttons = countDownControls.find('button').first();
      buttons.simulate('onClick');

      expect(onClickStop).toHaveBeenCalled();
    });
  })


});
