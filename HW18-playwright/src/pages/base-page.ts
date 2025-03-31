import { Page, Locator } from '@playwright/test';

export class BasePage {
    private get searchInput(): Locator {
        return this.page.locator("input[name='search']");
    }

    private get searchButton(): Locator {
        return this.page.locator('button.button_color_green');
    }

    public constructor(protected page: Page) {}

    public async searchProduct(product: string): Promise<void> {
        if (!product) {
            throw new Error('Product name cannot be empty');
        }

        await this.searchInput.fill(product);
        await this.searchButton.click();
    }
}
