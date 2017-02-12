import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Clock from 'Clock';

describe('Clock component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Clock totalSeconds={0} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('formatSeconds functions', () => {
    let clock;
    beforeEach(() => {
      clock = shallow(<Clock totalSeconds={0}/>);
    });

    it('returns false if empty string is sent', () => {
      expect(clock.instance().formatSeconds('')).toBeFalsy();
    });

    it('returns false if string is sent', () => {
      expect(clock.instance().formatSeconds('demo')).toBeFalsy();
    });

    it('returns false if array is sent', () => {
      expect(clock.instance().formatSeconds([])).toBeFalsy();
    });

    it('returns valid data if less that 10 seconds is sent', () => {
      expect(clock.instance().formatSeconds(9)).toBe('00:09');
    })

    it('returns valid data if less that 60 seconds is sent', () => {
      expect(clock.instance().formatSeconds(50)).toBe('00:50');
    })

    it('returns valid data if more that 60 seconds is sent', () => {
      expect(clock.instance().formatSeconds(140)).toBe('02:20');
    })
  });

  describe('render', () => {
    it('should render clock to output', () => {
      let clock = shallow(<Clock totalSeconds={0} />);
      expect(clock.text()).toEqual('00:00');
    });
  })
});
