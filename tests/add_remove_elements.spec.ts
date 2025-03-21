import { test, expect, Page } from '@playwright/test';

const listUrl = '/add_remove_elements/';
const addElement = 'button[onclick="addElement()"]';
const addedElementSelector = '.added-manually';
let addedElement: ReturnType<Page['locator']>;

test.describe('Add/Remove Elements Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(listUrl);
        addedElement = page.locator(addedElementSelector);
    });
    test('should add an element', async ({ page }) => {
        await page.goto(listUrl);
        await page.click(addElement);
        
        await expect(addedElement).toHaveCount(1);
    });

    test('should remove an element', async ({ page }) => {
        await page.goto(listUrl);
        await page.click(addElement);
        await expect(addedElement).toHaveCount(1);

        await addedElement.click();
        await expect(addedElement).toHaveCount(0);
    });
});