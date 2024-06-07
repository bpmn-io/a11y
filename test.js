import TestContainer from 'mocha-test-container-support';

import { expectToBeAccessible } from './index.js';


describe('#expectToBeAccessible', function() {

  it('should pass if the container has no violations', async function() {

    // given
    const testContainer = TestContainer.get(this);
    const container = document.createElement('div');
    container.innerHTML = '<img alt=alt_text src=src>';

    testContainer.appendChild(container);

    // then
    await expectToBeAccessible(container);
  });

  it('should fail if the container has violations', async function() {

    // given
    const testContainer = TestContainer.get(this);
    const container = document.createElement('div');
    container.innerHTML = '<img src=error>';

    testContainer.appendChild(container);

    // when
    let error;
    try {
      await expectToBeAccessible(container);

      // then
    } catch (e) {
      error = e;
    }

    // then
    expect(error).to.exist;
  });
});
