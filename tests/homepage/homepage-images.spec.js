import { test, expect } from '@playwright/test';

test('Homepage image validation', async ({ page }) => {

  await page.goto('https://www.premoheritage.com/');

  const images = page.locator('img');

  const imageCount = await images.count();

  console.log(`Total images found: ${imageCount}`);

  expect(imageCount).toBeGreaterThan(0);

  for (let i = 0; i < imageCount; i++) {

    const image = images.nth(i);

    await expect(image).toBeAttached();

    const src = await image.getAttribute('src');

    expect(src).not.toBeNull();

  }

});