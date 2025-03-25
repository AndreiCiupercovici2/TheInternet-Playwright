import {test, expect} from '@playwright/test';

const listUrl = '/exit_intent';
const modalSelector = '.modal';

test('Exit intent', async ({page}) => {
    await page.goto(listUrl);

   // Move mouse out of viewport
    await page.mouse.move(-10, -10);

    const modal = page.locator(modalSelector);
    expect(await modal.isVisible()).toBe(true);
}); 