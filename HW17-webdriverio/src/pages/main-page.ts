import { $$ } from '@wdio/globals';
import { ChainablePromiseArray } from 'webdriverio';
import { BasePage } from './base-page';

export class MainPage extends BasePage {
    private get productTiles(): ChainablePromiseArray {
        return $$('.goods-tile');
    }

    public async selectProduct(index: number): Promise<void> {
        if (index < 0) {
            throw new Error('Index must be a non-negative number');
        }
        const tiles = this.productTiles;
        await tiles[index].click();
    }
}
