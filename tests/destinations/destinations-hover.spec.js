import { test, expect } from '@playwright/test';

test('Destination Card Hover Effect', async ({ page }) => {

  await page.goto('https://www.premoheritage.com/destinations');

  const viewLocationLink = page.getByRole('link', {
    name: /View Location/i
  }).first();

  await expect(viewLocationLink).toBeVisible();

  await viewLocationLink.hover();

  await page.waitForTimeout(1000);

  await expect(viewLocationLink).toBeVisible();

});