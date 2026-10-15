import { test, expect } from '@playwright/test';

test('Homepage responsive validation', async ({ page }) => {

  // Mobile

  await page.setViewportSize({
    width: 375,
    height: 812
  });

  await page.goto('https://www.premoheritage.com/');

  await expect(page.locator('body')).toBeVisible();

  console.log('Mobile view validated');

  // Tablet

  await page.setViewportSize({
    width: 768,
    height: 1024
  });

  await page.reload();

  await expect(page.locator('body')).toBeVisible();

  console.log('Tablet view validated');

  // Desktop

  await page.setViewportSize({
    width: 1920,
    height: 1080
  });

  await page.reload();

  await expect(page.locator('body')).toBeVisible();

  console.log('Desktop view validated');

});