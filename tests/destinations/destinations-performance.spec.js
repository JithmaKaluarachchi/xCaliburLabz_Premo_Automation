import { test, expect } from '@playwright/test';

test('Destination Performance Validation', async ({ page }) => {

  page.on('console', msg => {

    if (msg.type() === 'error') {

      console.log(`Console Error: ${msg.text()}`);

    }

  });

  page.on('response', response => {

    if (response.status() >= 400) {

      console.log(
        `Failed Request: ${response.status()} ${response.url()}`
      );

    }

  });

  await page.goto('https://www.premoheritage.com/destinations');

  await page.waitForLoadState('networkidle');

  const loadTime = await page.evaluate(() => {

    return performance.timing.loadEventEnd -
           performance.timing.navigationStart;

  });

  console.log(`Load Time: ${loadTime} ms`);

  expect(loadTime).toBeLessThan(10000);

});