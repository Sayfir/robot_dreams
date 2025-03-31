import { Page, Locator } from '@playwright/test';

export class CartPage {
    public constructor(private page: Page) {}

    public get cartItems(): Locator {
        return this.page.locator('.cart-list__item');
    }

    private get cartIcon(): Locator {
        return this.page.locator("//button[@class ='header-cart__button']");
    }

    private get checkoutLink(): Locator {
        return this.page.locator("//span[@data-testid='cart-receipt-submit-order']");
    }

    public async gotoCheckout(): Promise<void> {
        await this.checkoutLink.click();
    }

    public async openCartPage(): Promise<void> {
        await this.cartIcon.click();
    }
}
