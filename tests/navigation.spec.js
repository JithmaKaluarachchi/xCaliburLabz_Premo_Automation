import { test, expect } from '@playwright/test';

test('Navigation bar and logo test', async ({ page }) => {

  // Home Page
  await page.goto('https://www.premoheritage.com/');

  // Verify logo is visible
  const logo = page
    .getByRole('navigation')
    .getByRole('link', { name: 'Premo Heritage Villa' });

  await expect(logo).toBeVisible();

  // About Page
  await page.goto('https://www.premoheritage.com/about');
  await expect(page).toHaveURL('https://www.premoheritage.com/about');

  // Contact Page
  await page.goto('https://www.premoheritage.com/contact');
  await expect(page).toHaveURL('https://www.premoheritage.com/contact');

  // Destinations Page
  await page.goto('https://www.premoheritage.com/destinations');
  await expect(page).toHaveURL('https://www.premoheritage.com/destinations');

  // Booking Page
  await page.goto('https://www.premoheritage.com/booking');
  await expect(page).toHaveURL('https://www.premoheritage.com/booking');

});