import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://simplur-next-app-dev.vercel.app/');
  await page.getByPlaceholder('Email', { exact: true }).click();
  await page.getByPlaceholder('Email', { exact: true }).fill('umrnwz@gmail.com');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('#printmoda-studio-fabric-printer').getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Added! Go to Cart?' }).click();
  await page.getByRole('link', { name: 'Checkout' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Umar');
  await page.getByPlaceholder('First Name').press('Tab');
  await page.getByPlaceholder('Last Name').fill('Nawaz');
  await page.getByPlaceholder('Last Name').press('Tab');
  await page.getByPlaceholder('House number and street name').fill('275, Olive Street,');
  await page.getByPlaceholder('House number and street name').press('Tab');
  await page.getByPlaceholder('Apt/Suite/Unit #').press('Tab');
  await page.getByPlaceholder('City').fill('Denver');
  await page.getByPlaceholder('City').press('Tab');
  await page.getByLabel('Select your state').selectOption('CA');
  await page.getByLabel('Select your state').press('Tab');
  await page.getByPlaceholder('Zip Code').fill('80220');
  await page.getByPlaceholder('Zip Code').press('Tab');
  await page.getByPlaceholder('Phone').fill('33980263');
  await page.getByPlaceholder('Phone').press('Tab');
  await page.getByPlaceholder('Email', { exact: true }).press('Tab');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();

});                                     