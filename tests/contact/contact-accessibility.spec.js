import { test, expect } from '@playwright/test';

test('Contact Page Accessibility Validation', async ({ page }) => {

  await page.goto('https://www.premoheritage.com/contact');

  const images = page.locator('img');

  const imageCount = await images.count();

  for (let i = 0; i < imageCount; i++) {

    const alt = await images.nth(i).getAttribute('alt');

    expect(alt).not.toBeNull();

  }

});