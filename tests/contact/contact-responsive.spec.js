import { test, expect } from '@playwright/test';

test('Contact Page Responsive Validation', async ({ page }) => {

  await page.setViewportSize({
    width: 375,
    height: 812
  });

  await page.goto('https://www.premoheritage.com/contact');

  await expect(page.locator('body')).toBeVisible();

  await page.setViewportSize({
    width: 768,
    height: 1024
  });

  await page.reload();

  await expect(page.locator('body')).toBeVisible();

  await page.setViewportSize({
    width: 1920,
    height: 1080
  });

  await page.reload();

  await expect(page.locator('body')).toBeVisible();

});