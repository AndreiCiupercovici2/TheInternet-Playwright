import { test, expect } from '@playwright/test';

test.describe('Add/Remove Elements Page', () => {
    test('should add an element', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
        await page.click('button[onclick="addElement()"]');
        const addedElement = page.locator('.added-manually');
        await expect(addedElement).toHaveCount(1);
    });

    test('should remove an element', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
        await page.click('button[onclick="addElement()"]');
        const addedElement = page.locator('.added-manually');
        await expect(addedElement).toHaveCount(1);

        await page.click('.added-manually');
        await expect(addedElement).toHaveCount(0);
    });
});