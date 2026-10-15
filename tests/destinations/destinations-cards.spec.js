import { test, expect } from '@playwright/test';

test('Destination Cards Validation', async ({ page }) => {

  await page.goto('https://www.premoheritage.com/destinations');

  await page.waitForLoadState('networkidle');

  // Destination cards contain images
  const destinationImages = page.locator('img');

  const imageCount = await destinationImages.count();

  console.log(`Destination Images Found: ${imageCount}`);

  expect(imageCount).toBeGreaterThan(5);

  // Verify first few destination images are loaded
  for (let i = 0; i < Math.min(imageCount, 10); i++) {

    const image = destinationImages.nth(i);

    await expect(image).toBeAttached();

    const src = await image.getAttribute('src');

    expect(src).not.toBeNull();

  }

});