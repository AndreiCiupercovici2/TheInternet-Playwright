import { test, expect } from '@playwright/test';

const listUrl = '/basic_auth/';
const username = 'admin';
const password = 'admin';
const wrongUsername = 'wrong';
const wrongPassword = 'wrong';
const successfulMessage = 'Congratulations! You must have the proper credentials.';

test.describe('Basic Authentication Page', () => {
    test('Log in successfully', async ({ browser }) => {
        const context = await browser.newContext({
            httpCredentials: { 
                username, 
                password 
            },
            });
        
        const page = await context.newPage();
        await page.goto(listUrl);

        await expect(page.locator('body')).toContainText(successfulMessage);
    });

    test('Log in with incorrect credentials', async ({ browser }) => {
        const context = await browser.newContext({
            httpCredentials: { 
                username: wrongUsername,
                password: wrongPassword 
            },
        });
        const page = await context.newPage();
        await page.goto(listUrl);

            await expect(page.locator('body')).not.toContainText(successfulMessage); 
        });
    });