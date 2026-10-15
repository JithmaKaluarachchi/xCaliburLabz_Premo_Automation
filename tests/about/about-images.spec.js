import { test, expect } from '@playwright/test';

test('About Page Images Validation', async ({ page }) => {

  await page.goto('https://www.premoheritage.com/about');

  const images = page.locator('img');

  const imageCount = await images.count();

  expect(imageCount).toBeGreaterThan(0);

  for (let i = 0; i < imageCount; i++) {

    const image = images.nth(i);

    await expect(image).toBeAttached();

    const src = await image.getAttribute('src');

    expect(src).not.toBeNull();

    const alt = await image.getAttribute('alt');

    expect(alt).not.toBeNull();

  }

});