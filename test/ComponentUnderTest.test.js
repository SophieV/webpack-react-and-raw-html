import assert from 'assert';
import React from 'React';
import proxyquire from 'proxyquire';
import TestUtils from 'react-addons-test-utils';
import ReactEmptyComponentStub from './reactStub';

describe('Component under test', function() {

let ComponentUnderTest_StubDependency;

  before(function () {
    // Create a fake global `window` and `document` object:
    this.jsdom = require('jsdom-global')();
  });

  beforeEach(function() {
    ComponentUnderTest_StubDependency = proxyquire(process.cwd() + '/src/elements/ComponentUnderTest.jsx', {
      // dependency - exact required name
      './aDependency.jsx': ReactEmptyComponentStub
    });
  });

  after(function () {
    // dispose
    this.jsdom();
  });

  it('changes the text after click', function() {
    // Render a checkbox with label in the document
    let checkbox = TestUtils.renderIntoDocument(
      <ComponentUnderTest_StubDependency labelOn="On" labelOff="Off" />
    );

    // Verify that it's Off by default
    let label = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'label');
    assert.equal(label.textContent, 'Off');

    // Simulate a click and verify that it is now On
    let input = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input');
    TestUtils.Simulate.change(input);
    assert.equal(label.textContent, 'On');
  });
});
