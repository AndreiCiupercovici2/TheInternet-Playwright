import { test, expect } from "@playwright/test";

const listUrl = "/checkboxes";
const checkboxSelector = 'input[type="checkbox"]';

test.describe("Check and uncheck checkboxes", async () => {
    test("Check checkboxes", async ({ page }) => {
        await page.goto(listUrl);

        const checkboxes = await page.locator(checkboxSelector).all();
        for (const checkbox of checkboxes) {
            const isChecked = await checkbox.isChecked();
            if (!isChecked) {
                await checkbox.check();
            }
            expect(await checkbox.isChecked()).toBeTruthy();
        }
    });
    test("Uncheck checkboxes", async ({ page }) => {
        await page.goto(listUrl);

        const checkboxes = await page.locator(checkboxSelector).all();
        for (const checkbox of checkboxes) {
            await checkbox.check();
            const isChecked = await checkbox.isChecked();
            if (isChecked) {
                await checkbox.uncheck();
            }
            expect(await checkbox.isChecked()).toBeFalsy();
        }
    });
});