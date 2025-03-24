import {test, expect} from '@playwright/test';

const listUrl = '/dropdown';

test('Select dropdown option', async ({page}) => {
    await page.goto(listUrl);

    const dropdown = page.locator('#dropdown');
    await dropdown.selectOption({ value: '1'});

    expect(await dropdown.inputValue()).toBe('1');
});