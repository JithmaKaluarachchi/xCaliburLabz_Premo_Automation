import { test, expect } from '@playwright/test';

test('About Page Responsive Validation', async ({ page }) => {

  // Mobile

  await page.setViewportSize({
    width: 375,
    height: 812
  });

  await page.goto('https://www.premoheritage.com/about');

  await expect(page.locator('body')).toBeVisible();

  // Tablet

  await page.setViewportSize({
    width: 768,
    height: 1024
  });

  await page.reload();

  await expect(page.locator('body')).toBeVisible();

  // Desktop

  await page.setViewportSize({
    width: 1920,
    height: 1080
  });

  await page.reload();

  await expect(page.locator('body')).toBeVisible();

});