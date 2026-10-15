import { test, expect } from '@playwright/test';

test('Google Map Validation', async ({ page }) => {

  await page.goto('https://www.premoheritage.com/contact');

  const mapFrame = page.locator('iframe');

  const mapCount = await mapFrame.count();

  console.log(`Maps Found: ${mapCount}`);

  expect(mapCount).toBeGreaterThan(0);

});