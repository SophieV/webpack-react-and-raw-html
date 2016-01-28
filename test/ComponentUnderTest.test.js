let assert = require('assert');
let React = require('React');
let proxyquire =  require('proxyquire');
let TestUtils = require('react-addons-test-utils');
let ReactEmptyComponentStub  = require('./reactStub');

describe('Component under test', function() {

let ComponentUnderTest_StubDependency;

  before(function () {
    // Create a fake global `window` and `document` object:
    this.jsdom = require('jsdom-global')();
  });

  beforeEach(function() {
    ComponentUnderTest_StubDependency = proxyquire(process.cwd() + '/src/elements/ComponentUnderTest.js', {
      // dependency - exact required name
      './aDependency.js': ReactEmptyComponentStub
    });
  });

  after(function () {
    // dispose
    this.jsdom();
  });

  it('changes the text after click', function() {
    // Render a checkbox with label in the document
    var checkbox = TestUtils.renderIntoDocument(
      <ComponentUnderTest_StubDependency labelOn="On" labelOff="Off" />
    );

    // Verify that it's Off by default
    var label = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'label');
    assert.equal(label.textContent, 'Off');

    // Simulate a click and verify that it is now On
    var input = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input');
    TestUtils.Simulate.change(input);
    assert.equal(label.textContent, 'On');
  });
});
