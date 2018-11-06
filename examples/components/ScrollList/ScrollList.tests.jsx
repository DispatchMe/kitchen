import expect from 'expect';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';

import ScrollList from './ScrollList';

class TextComponent extends Component {
  static propTypes = {
    text: PropTypes.string,
  };

  render() {
    const { text } = this.props;

    return (
      <span>{text}</span>
    );
  }
}

function expectNodeWithText(wrapper, text) {
  const textNode = wrapper.findWhere(node => node.is('span') && node.text() === text);
  expect(textNode.length).toEqual(1);
}

export default function run() {
  describe('Scroll List', () => {
    it('iterates over children based on items in the list', () => {
      const items = [{ text: 'item 1' }, { text: 'item 2' }, { text: 'item 3' }];
      const wrapper = mount(<ScrollList items={items}><TextComponent /></ScrollList>);

      expectNodeWithText(wrapper, 'item 1');
      expectNodeWithText(wrapper, 'item 2');
      expectNodeWithText(wrapper, 'item 3');
    });
  });
}

if (typeof describe !== 'undefined') run();
