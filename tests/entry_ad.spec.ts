import {test, expect} from '@playwright/test';

const listUrl = '/entry_ad';
const modalSelector = '.modal';
const modalClose = '.modal .modal-footer p';

test('Close modal', async ({page}) => {
    await page.goto(listUrl);

    const modal = page.locator(modalSelector);
    await modal.waitFor({ state: 'visible' });
    await page.click(modalClose);

    expect(await modal.isVisible()).toBe(false);
});