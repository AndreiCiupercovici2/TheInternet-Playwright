import {test, expect} from '@playwright/test';

const listUrl = '/entry_ad';

test('Close modal', async ({page}) => {
    await page.goto(listUrl);

    const modal = page.locator('.modal');
    await modal.waitFor({ state: 'visible' });
    await page.click('.modal .modal-footer p');

    expect(await modal.isVisible()).toBe(false);
});