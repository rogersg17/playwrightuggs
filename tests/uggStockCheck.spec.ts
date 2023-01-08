import { test, expect } from '@playwright/test';

test('UggTest', async ({ page }) => {
  await page.goto('https://www.ugg.com/eu/en/ie/');
  await expect(page).toHaveTitle(/Ugg/i);
// await page.getByRole('searchbox', { name: 'Search' }).fill('Women\'s Classic Mini II Boot');
//  await page.getByRole('link', { name: 'Women\'s Classic Mini II Boot' }).nth(2).click();
//  await expect(page.getByRole('heading', { name: 'Classic Mini II Boot' })).toBeVisible();
//  await expect(page.getByText('€ 185')).toBeVisible();
//  await page.getByRole('link', { name: 'CHESTNUT' }).first().click();
//  await page.getByRole('button', { name: '37' }).first().click();
//  await expect(page.getByRole('button', { name: '37' }).first(),'Uggs are in stock').toHaveClass(/out-of-stock/);
});
