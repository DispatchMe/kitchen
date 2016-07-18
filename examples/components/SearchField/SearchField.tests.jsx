import expect, { createSpy } from 'expect';
import React from 'react';
import { mount } from 'enzyme';

import SearchField from './SearchField';

function simulateAndExpectEventWithArgs(wrapper, spy, eventName) {
  const input = wrapper.find('input');
  const event = { target: { value: 'test' } };

  input.simulate(eventName, event);

  expect(spy).toHaveBeenCalled();
  expect(spy.calls[0].arguments[0]).toContain(event);
  expect(spy.calls[0].arguments[1]).toEqual(event.target.value);
}

export default function run() {
  describe('Search Field', () => {
    it('runs onBlur function from props when the input is blurred', () => {
      const onBlur = createSpy();
      const wrapper = mount(<SearchField onBlur={onBlur} />);

      simulateAndExpectEventWithArgs(wrapper, onBlur, 'blur');
    });

    it('runs onChange function from props when input value changes', () => {
      const onChange = createSpy();
      const wrapper = mount(<SearchField onChange={onChange} />);

      simulateAndExpectEventWithArgs(wrapper, onChange, 'change');
    });

    it('runs onInput function from props when input value changes', () => {
      const onInput = createSpy();
      const wrapper = mount(<SearchField onInput={onInput} />);

      simulateAndExpectEventWithArgs(wrapper, onInput, 'input');
    });
  });
}

if (typeof describe !== 'undefined') run();
