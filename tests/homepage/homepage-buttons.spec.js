import { test, expect } from '@playwright/test';

test('Homepage button validation', async ({ page }) => {

  await page.goto('https://www.premoheritage.com/');

  const buttons = page.locator('button');

  const buttonCount = await buttons.count();

  console.log(`Total buttons found: ${buttonCount}`);

  expect(buttonCount).toBeGreaterThan(0);

  for (let i = 0; i < buttonCount; i++) {

    const button = buttons.nth(i);

    await expect(button).toBeAttached();

  }

});