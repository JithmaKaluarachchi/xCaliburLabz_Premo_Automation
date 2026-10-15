import { test, expect } from '@playwright/test';

test('Contact Page Content Validation', async ({ page }) => {

  await page.goto('https://www.premoheritage.com/contact');

  const headings = page.locator('h1, h2, h3');

  expect(await headings.count()).toBeGreaterThan(0);

  const paragraphs = page.locator('p');

  expect(await paragraphs.count()).toBeGreaterThan(0);

  const sections = page.locator('section');

  expect(await sections.count()).toBeGreaterThan(0);

});