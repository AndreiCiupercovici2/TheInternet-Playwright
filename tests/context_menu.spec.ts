import { test, expect } from '@playwright/test';

const listUrl = '/context_menu';
const contextMenuSelector = '#hot-spot';

test("Verify Context menu dialog", async ({ page }) => {
    await page.goto(listUrl);
    page.on("dialog", async (dialog) => {
        expect(dialog.type()).toContain("alert");
        expect(dialog.message()).toContain("You selected a context menu");
        await dialog.accept();
    });
    await page.locator(contextMenuSelector).click({ button: "right" });
});