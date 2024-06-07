import axe from 'axe-core';
import { expect } from 'chai';

const DEFAULT_TAGS = [ 'wcag2a', 'wcag21a' ];

/**
 * Verify that the container has no violations.
 *
 * @param {HTMLElement} container
 */
export async function expectToBeAccessible(container) {
  const { passes, violations } = await axe.run(container, {
    runOnly: {
      type: 'tag',
      values: DEFAULT_TAGS
    }
  });


  expect(passes).not.to.be.empty;
  expect(violations).to.be.empty;
}
