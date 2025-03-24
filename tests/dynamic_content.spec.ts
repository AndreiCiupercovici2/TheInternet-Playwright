import { test, expect } from '@playwright/test';

const listUrl = '/dynamic_content';
const listSelector = 'div#content div.row';
const possibleImages = ['/img/avatars/Original-Facebook-Geek-Profile-Avatar-2.jpg',
    '/img/avatars/Original-Facebook-Geek-Profile-Avatar-3.jpg',
    '/img/avatars/Original-Facebook-Geek-Profile-Avatar-5.jpg',
    '/img/avatars/Original-Facebook-Geek-Profile-Avatar-6.jpg',
    '/img/avatars/Original-Facebook-Geek-Profile-Avatar-7.jpg'];

test('should display 3 random images', async ({ page }) => {
    await page.goto(listUrl);
    const images = await page.$$(listSelector + ' img');
    const srcs = await Promise.all(images.map(async img => await img.getAttribute('src')));
    expect(srcs).toHaveLength(3);
    srcs.forEach(src => {
        expect(possibleImages).toContain(src);
    });
    console.log('Image sources: ', srcs);
});