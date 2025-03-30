import { $ } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';
import { BasePage } from './base-page';

export class ProductPage extends BasePage {
    private get productTitle(): ChainablePromiseElement {
        return $('h1');
    }

    private get buyButton(): ChainablePromiseElement {
        return $('button.buy-button--tile');
    }

    public async getTileText(product: string): Promise<string> {
        if (!product) {
            throw new Error('Product name cannot be empty');
        }
        return await this.productTitle.getText();
    }

    public async clickBuyButton(): Promise<void> {
        await this.buyButton.click();
    }
}
