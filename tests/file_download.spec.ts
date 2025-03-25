import { test, expect } from '@playwright/test';

const listUrl = '/download';
const downloadLinkSelector = 'a:has-text("test1.png")';

test('Download file', async ({ page }) => {
    await page.goto(listUrl);

    const downloadLink = page.locator(downloadLinkSelector);
    const downloadUrl = await downloadLink.getAttribute('href');
    const baseUrl = page.url();
    const absoluteDownloadUrl = new URL(downloadUrl!, baseUrl).toString();

    const downloadPromise = page.waitForEvent('download');
    await Promise.all([
        downloadPromise,
        downloadLink.click()
    ]);
    const download = await downloadPromise;
    expect(download.url()).toBe(absoluteDownloadUrl);
});