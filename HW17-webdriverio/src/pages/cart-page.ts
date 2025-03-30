import { $, $$ } from '@wdio/globals';
import { ChainablePromiseElement, ChainablePromiseArray } from 'webdriverio';

export class CartPage {
    public get cartItems(): ChainablePromiseArray {
        return $$('.cart-list__item');
    }

    private get cartIcon(): ChainablePromiseElement {
        return $("//button[@class ='header-cart__button']");
    }

    private get checkoutLink(): ChainablePromiseElement {
        return $("//span[@data-testid='cart-receipt-submit-order']");
    }

    public async gotoCheckout(): Promise<void> {
        await this.checkoutLink.click();
    }

    public async openCartPage(): Promise<void> {
        this.cartIcon.click();
    }
}
