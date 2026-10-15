import { test, expect } from '@playwright/test';

test('View Location Navigation Validation', async ({ page }) => {

  await page.goto('https://www.premoheritage.com/destinations');

  await page.waitForLoadState('networkidle');

  const viewLocationLinks = page.locator('a[href*="maps"]');

  const count = await viewLocationLinks.count();

  console.log(`View Location Links Found: ${count}`);

  expect(count).toBeGreaterThan(0);

  for (let i = 0; i < count; i++) {

    const link = viewLocationLinks.nth(i);

    const href = await link.getAttribute('href');

    console.log(`Map URL: ${href}`);

    expect(href).toContain('map');

  }

});