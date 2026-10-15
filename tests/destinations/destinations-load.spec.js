import { test, expect } from '@playwright/test';

test('Destinations Page Load', async ({ page }) => {

  await page.goto('https://www.premoheritage.com/destinations');

  await page.waitForLoadState('networkidle');

  await expect(page).toHaveURL(
    'https://www.premoheritage.com/destinations'
  );

  await expect(page).toHaveTitle(/Premo/i);

  await expect(page.locator('body')).toBeVisible();

});