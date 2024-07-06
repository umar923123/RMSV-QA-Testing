import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://simplur-next-app-dev.vercel.app/');
  await page.getByPlaceholder('Email', { exact: true }).click();
  await page.getByPlaceholder('Email', { exact: true }).fill('umrnwz@gmail.com');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: 'Shop Online' }).click();
  await page.locator('article').filter({ hasText: /^Sewing Machines$/ }).getByRole('link').first().click();
  await page.locator('#pre-order-the-new-baby-lock').getByRole('button', { name: 'Add to cart' }).click();
  await page.locator('#baby-lock-accomplish-2').getByRole('link', { name: 'View Detail' }).click();
  await page.getByLabel('Add 2 Year Love Of Sewing').selectOption('Machine and Love of Sewing Membership');
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Added! Go to Cart?' }).click();
  await page.locator('li').filter({ hasText: 'Pre-Order the New Baby Lock' }).getByRole('button').click();
  await page.getByRole('link', { name: 'logo' }).click();
});