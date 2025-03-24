import { test, expect } from '@playwright/test';

const listUrl = '/broken_images';

test('See if images load correctly', async ({ page }) => {
    test.fail(true, 'Test fails due to broken images');
    await page.goto(listUrl);

    const images = await page.locator('img').all();
    for (const image of images) {
        const src = await image.getAttribute('src');
        if (src) {
            const response = await page.request.get(src);
            expect(response.status()).toBe(200);
        }
    }
});