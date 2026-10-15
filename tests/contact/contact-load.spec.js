import { test, expect } from '@playwright/test';

test('Contact Page Load Validation', async ({ page }) => {

  await page.goto('https://www.premoheritage.com/contact');

  await page.waitForLoadState('networkidle');

  await expect(page).toHaveURL(
    'https://www.premoheritage.com/contact'
  );

  await expect(page).toHaveTitle(/Premo/i);

  await expect(page.locator('body')).toBeVisible();

});