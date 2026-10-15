import { test, expect } from '@playwright/test';

test('Contact Page Links Validation', async ({ page }) => {

  await page.goto('https://www.premoheritage.com/contact');

  const links = page.locator('a');

  const count = await links.count();

  expect(count).toBeGreaterThan(0);

  for (let i = 0; i < count; i++) {

    const href = await links.nth(i).getAttribute('href');

    if (href) {

      console.log(`Link: ${href}`);

    }

  }

});