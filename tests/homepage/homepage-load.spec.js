import { test, expect } from '@playwright/test';

test('Homepage load validation', async ({ page }) => {

  await page.goto('https://www.premoheritage.com/');

  await page.waitForLoadState('networkidle');

  await expect(page).toHaveTitle(/Premo/i);

  const body = page.locator('body');

  await expect(body).toBeVisible();

  console.log('Homepage loaded successfully');

});