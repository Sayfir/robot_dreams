import { browser } from '@wdio/globals';

export class CheckoutPage {
    public async checkoutPageOpened(): Promise<void> {
        await expect(browser).to.contain('checkout');
    }
}
