import { Page, expect } from '@playwright/test';

export class CheckoutPage {
    public constructor(private page: Page) {}

    public async checkoutPageOpened(): Promise<void> {
        await expect(this.page).toHaveURL('/checkout/');
    }
}
