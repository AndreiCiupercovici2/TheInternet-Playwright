import {test, expect} from '@playwright/test';

const listUrl = '/drag_and_drop';
const sourceSelector = '#column-a';
const targetSelector = '#column-b';

test('Drag and drop elements', async ({page}) => {
    await page.goto(listUrl);

    const source = page.locator(sourceSelector);
    const target = page.locator(targetSelector);

    await page.locator(sourceSelector).dragTo(page.locator(targetSelector));

    expect(await source.textContent()).toBe('B');
    expect(await target.textContent()).toBe('A');
});