import {test, expect} from '@playwright/test';

const listUrl = '/dynamic_controls';
const checkboxSelector = '#checkbox';
const removeButtonSelector = '#checkbox-example button';
const enableButtonSelector = '#input-example button';
const inputSelector = '#input-example input';

test.describe('Dynamic Controls', () => {
    test('should remove checkbox', async ({page}) => {
        await page.goto(listUrl);
        await page.click(removeButtonSelector);
        await page.waitForSelector(checkboxSelector, { state: 'detached' });
        await expect(page.isVisible(checkboxSelector)).resolves.toBeFalsy();
    });

    test('should enable input', async ({page}) => {
        await page.goto(listUrl);
        await page.click(enableButtonSelector);
        await page.waitForSelector(inputSelector, { state: 'visible' });
        await expect(page.isVisible(inputSelector)).resolves.toBeTruthy();
    });
});