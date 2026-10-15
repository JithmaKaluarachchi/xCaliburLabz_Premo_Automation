import { test, expect } from '@playwright/test';

test('About Page Buttons Validation', async ({ page }) => {

  await page.goto('https://www.premoheritage.com/about');

  await page.waitForLoadState('networkidle');

  const buttons = page.locator('button');

  const buttonCount = await buttons.count();

  console.log(`Total Buttons Found: ${buttonCount}`);

  expect(buttonCount).toBeGreaterThan(0);

  for (let i = 0; i < buttonCount; i++) {

    const button = buttons.nth(i);

    await expect(button).toBeAttached();

    const isVisible = await button.isVisible();

    if (isVisible) {

      await expect(button).toBeEnabled();

      const text = await button.textContent();

      console.log(`Visible Button: ${text}`);

    } else {

      console.log(`Hidden Button Skipped: ${i}`);

    }

  }

});