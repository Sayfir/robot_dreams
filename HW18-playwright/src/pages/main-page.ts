import { Page, Locator } from '@playwright/test';
import { BasePage } from './base-page';

export class MainPage extends BasePage {
    public constructor(page: Page) {
        super(page);
    }

    private get productTiles(): Locator {
        return this.page.locator('.goods-tile');
    }

    public async selectProduct(index: number): Promise<void> {
        if (index < 0) {
            throw new Error('Index must be a non-negative number');
        }
        const tiles = await this.productTiles.elementHandles();
        if (index >= tiles.length) {
            throw new Error('Index out of bounds');
        }
        await tiles[index].click();
    }
}
