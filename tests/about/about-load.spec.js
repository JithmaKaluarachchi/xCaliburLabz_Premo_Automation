import { test, expect } from '@playwright/test';

test('About Page Load Validation', async ({ page }) => {

  await page.goto('https://www.premoheritage.com/about');

  await page.waitForLoadState('networkidle');

  await expect(page).toHaveURL(
    'https://www.premoheritage.com/about'
  );

  await expect(page).toHaveTitle(/Premo/i);

  await expect(page.locator('body')).toBeVisible();

});