import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.daft.ie');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Daft/);
});

test('Login to Daft', async ({ page }) => {
  await page.goto('https://www.daft.ie');

  // Click to accept cookies
  await page.getByRole('button', { name: 'Accept All' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/www.daft.ie/);

  // Select For Sale from 700000 Sorted by Most Recent
  //await page.getByTestId('quick-link-0').click();
  //await page.getByTestId('salePrice').click();
  //await page.getByTestId('salePriceFrom').selectOption('700000');
  //await page.getByTestId('salePriceMenu').getByTestId('filter-done-button').click();
  //await page.getByTestId('sort').selectOption('publishDateDesc');

  //click SignIn
  //await page.getByTestId('top-level-active-nav-link').click();

  // SignIn and SignOut
  //await page.getByLabel('Email or username').fill(process.env.USERNAME!);
  //await page.getByLabel('Password').fill(process.env.PASSWORD!);
  //await page.getByRole('button', { name: 'SIGN IN' }).click();
  //await page.getByTestId('nav-item-mydaft').getByTestId('top-level-nav-item').click();
  //await page.getByRole('link', { name: 'Sign out' }).click();
  //await page.getByRole('button', { name: 'Logout' }).click();
  //await page.close();
});
