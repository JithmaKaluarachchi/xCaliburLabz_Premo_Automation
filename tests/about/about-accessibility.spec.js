import { test, expect } from '@playwright/test';

test('About Page Accessibility Validation', async ({ page }) => {

  await page.goto('https://www.premoheritage.com/about');

  const images = page.locator('img');

  const imageCount = await images.count();

  for (let i = 0; i < imageCount; i++) {

    const alt = await images.nth(i).getAttribute('alt');

    expect(alt).not.toBeNull();

  }

  const buttons = page.locator('button');

  const buttonCount = await buttons.count();

  for (let i = 0; i < buttonCount; i++) {

    await expect(buttons.nth(i)).toBeEnabled();

  }

});