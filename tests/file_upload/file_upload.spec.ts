import {test, expect} from '@playwright/test';
import * as path from 'path'

const listUrl = '/upload';
const fileInputSelector = '#file-upload';
const uploadButtonSelector = '#file-submit';
const uploadedFileSelector = '#uploaded-files';
const fileName = 'test.txt';
const file = path.join(__dirname, 'test.txt');

test ('Upload file', async ({page}) => {
    await page.goto(listUrl);

    const [fileInput] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator(fileInputSelector).click()
    ]);
    await fileInput.setFiles(file);

    const submitButton = page.locator(uploadButtonSelector);
    await submitButton.click();

    const uploadedFile = await page.locator(uploadedFileSelector).textContent();
    expect(uploadedFile).toContain(fileName);
});