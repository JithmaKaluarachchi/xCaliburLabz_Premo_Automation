import { test, expect } from '@playwright/test';

test('Footer section validation', async ({ page }) => {

  // Open homepage
  await page.goto('https://www.premoheritage.com/');

  // Main footer
  const footer = page.locator('footer').last();

  // Verify footer visible
  await expect(footer).toBeVisible();

  // Footer logo
  const footerLogo = footer.getByRole('link', {
    name: /Premo Heritage Villa/i
  });

  await expect(footerLogo).toBeVisible();

  // Footer links
  const homeLink = footer.getByRole('link', { name: 'Home' });
  const aboutLink = footer.getByRole('link', { name: /About/i });
  const contactLink = footer.getByRole('link', { name: /Contact/i });
  const destinationLink = footer.getByRole('link', { name: /Destinations/i });
  const termsLink = footer.getByRole('link', { name: /Terms/i });
  const privacyLink = footer.getByRole('link', { name: /Privacy/i });

  // Verify links visible
  await expect(homeLink).toBeVisible();
  await expect(aboutLink).toBeVisible();
  await expect(contactLink).toBeVisible();
  await expect(destinationLink).toBeVisible();
  await expect(termsLink).toBeVisible();
  await expect(privacyLink).toBeVisible();

  // Alignment validation
  const homeBox = await homeLink.boundingBox();
  const aboutBox = await aboutLink.boundingBox();
  const contactBox = await contactLink.boundingBox();

  expect(Math.abs(homeBox.y - aboutBox.y)).toBeLessThan(120);
  expect(Math.abs(aboutBox.y - contactBox.y)).toBeLessThan(120);

  // Navigation validation

  await homeLink.click();
  await expect(page).toHaveURL('https://www.premoheritage.com/');

  await page.goto('https://www.premoheritage.com/');

  await aboutLink.click();
  await expect(page).toHaveURL('https://www.premoheritage.com/about');

  await page.goto('https://www.premoheritage.com/');

  await contactLink.click();
  await expect(page).toHaveURL('https://www.premoheritage.com/contact');

  await page.goto('https://www.premoheritage.com/');

  await destinationLink.click();
  await expect(page).toHaveURL('https://www.premoheritage.com/destinations');

  await page.goto('https://www.premoheritage.com/');

  await termsLink.click();
  await expect(page).toHaveURL('https://www.premoheritage.com/terms-and-conditions');

  await page.goto('https://www.premoheritage.com/');

  await privacyLink.click();
  await expect(page).toHaveURL('https://www.premoheritage.com/privacy-policy');

});