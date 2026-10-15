import { test, expect } from '@playwright/test';

test('Google Maps Navigation Validation', async ({ page }) => {

  await page.goto('https://www.premoheritage.com/destinations');

  const mapLinks = page.locator('a[href*="google"], a[href*="maps"]');

  const count = await mapLinks.count();

  console.log(`Map Links Found: ${count}`);

  expect(count).toBeGreaterThan(0);

  for (let i = 0; i < count; i++) {

    const href = await mapLinks.nth(i).getAttribute('href');

    console.log(`Map Link: ${href}`);

    expect(href).toContain('map');

  }

});