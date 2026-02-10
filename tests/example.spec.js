// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Static.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Drag and Drop/);
});

test('click home link', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Static.html');

  // Click the get started link.
  await page.getByRole('link', { name: 'Home' }).click();

  // Expects page to have a text with the name of Email id or Sign Up.
  await expect(page.getByPlaceholder('Email id for Sign Up')).toBeVisible();
});
