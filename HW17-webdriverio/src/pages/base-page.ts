import { $ } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';

export class BasePage {
    private get searchInput(): ChainablePromiseElement {
        return $("input[name='search']");
    }

    private get searchButton(): ChainablePromiseElement {
        return $('button.button_color_green');
    }

    public async searchProduct(product: string): Promise<void> {
        if (!product) {
            throw new Error('Product name cannot be empty');
        }

        await (await this.searchInput).setValue(product);
        await (await this.searchButton).click();
    }
}
