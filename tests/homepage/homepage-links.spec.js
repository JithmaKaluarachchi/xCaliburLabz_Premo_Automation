import { test, expect } from '@playwright/test';

test('Homepage links validation', async ({ page }) => {

  await page.goto('https://www.premoheritage.com/');

  const links = page.locator('a');

  const linkCount = await links.count();

  console.log(`Total links found: ${linkCount}`);

  expect(linkCount).toBeGreaterThan(0);

  for (let i = 0; i < linkCount; i++) {

    const link = links.nth(i);

    const href = await link.getAttribute('href');

    if (href) {

      console.log(`Link Found: ${href}`);

    }

  }

});