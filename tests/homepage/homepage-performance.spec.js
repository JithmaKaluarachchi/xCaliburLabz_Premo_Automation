import { test, expect } from '@playwright/test';

test('Homepage performance validation', async ({ page }) => {

  await page.goto('https://www.premoheritage.com/');

  await page.waitForLoadState('networkidle');

  const loadTime = await page.evaluate(() => {

    return performance.timing.loadEventEnd -
           performance.timing.navigationStart;

  });

  console.log(`Page Load Time: ${loadTime} ms`);

  expect(loadTime).toBeLessThan(10000);

});