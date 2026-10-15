import { test, expect } from '@playwright/test';

test('About Page Content Validation', async ({ page }) => {

  await page.goto('https://www.premoheritage.com/about');

  const headings = page.locator('h1, h2, h3');

  const headingCount = await headings.count();

  expect(headingCount).toBeGreaterThan(0);

  const paragraphs = page.locator('p');

  const paragraphCount = await paragraphs.count();

  expect(paragraphCount).toBeGreaterThan(0);

  const sections = page.locator('section');

  const sectionCount = await sections.count();

  expect(sectionCount).toBeGreaterThan(0);

  console.log(`Headings: ${headingCount}`);
  console.log(`Paragraphs: ${paragraphCount}`);
  console.log(`Sections: ${sectionCount}`);

});