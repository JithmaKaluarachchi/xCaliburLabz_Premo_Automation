import { test, expect } from '@playwright/test';

test('Contact Form Validation', async ({ page }) => {

  await page.goto('https://www.premoheritage.com/contact');

  await page.waitForLoadState('networkidle');

  // =====================================================
  // Name Field
  // =====================================================

  const nameField = page.locator('input').first();

  await expect(nameField).toBeVisible();

  // =====================================================
  // Email Field
  // =====================================================

  const emailField = page.locator('input[type="email"]');

  await expect(emailField).toBeVisible();

  // =====================================================
  // Message Field
  // =====================================================

  const messageField = page.locator('textarea');

  await expect(messageField).toBeVisible();

  // =====================================================
  // Send Inquiry Button
  // =====================================================

  const sendInquiryButton = page.getByRole('button', {
    name: /Send Inquiry/i
  });

  await expect(sendInquiryButton).toBeVisible();

  await expect(sendInquiryButton).toBeEnabled();

  console.log('Contact form fields validated successfully');

});