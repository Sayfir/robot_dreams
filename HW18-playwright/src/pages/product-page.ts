import { Page, Locator } from '@playwright/test';
import { BasePage } from './base-page';

export class ProductPage extends BasePage {
    public constructor(page: Page) {
        super(page);
    }

    private get productTitle(): Locator {
        return this.page.locator('h1');
    }

    private get buyButton(): Locator {
        return this.page.locator('button.buy-button--tile');
    }

    public async getTileText(): Promise<string> {
        return (await this.productTitle.textContent()) || '';
    }

    public async clickBuyButton(): Promise<void> {
        await this.buyButton.click();
    }
}
