import { test } from '@playwright/test';

test('Homepage console and API validation', async ({ page }) => {

  page.on('console', msg => {

    if (msg.type() === 'error') {

      console.log('Console Error:', msg.text());

    }

  });

  page.on('response', response => {

    if (response.status() >= 400) {

      console.log(`Failed Request: ${response.status()} - ${response.url()}`);

    }

  });

  await page.goto('https://www.premoheritage.com/');

  await page.waitForTimeout(5000);

});