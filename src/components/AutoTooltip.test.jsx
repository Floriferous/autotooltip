import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import jsdom from 'jsdom';

import AutoTooltip from './AutoTooltip';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

describe('Auto Tooltip', () => {
  let props;
  let mountedComponent;
  const component = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<AutoTooltip {...props} />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('Always renders a span', () => {
    const spans = component().find('span');
    expect(spans.length).to.be.at.least(1);
  });

  describe('When no match is given', () => {
    beforeEach(() => {
      props = {
        children: 'hello world',
        match: '',
      };
    });

    it('Renders the same text if no match is given', () => {
      const comp = component();

      expect(comp.text()).to.equal(props.children);
    });
  });
});
