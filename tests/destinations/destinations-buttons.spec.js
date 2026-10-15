import { test, expect } from '@playwright/test';

test('Destination Buttons Validation', async ({ page }) => {

  await page.goto('https://www.premoheritage.com/destinations');

  const buttons = page.locator('button');

  const count = await buttons.count();

  console.log(`Buttons Found: ${count}`);

  if (count > 0) {

    for (let i = 0; i < count; i++) {

      const button = buttons.nth(i);

      if (await button.isVisible()) {

        await expect(button).toBeEnabled();

      }

    }

  }

});