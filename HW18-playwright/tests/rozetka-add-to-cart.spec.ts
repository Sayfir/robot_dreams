import { test, expect } from '@playwright/test';
import { BasePage } from 'src/pages/base-page';
import { MainPage } from 'src/pages/main-page';
import { ProductPage } from 'src/pages/product-page';
import { CartPage } from 'src/pages/cart-page';

const itemsToBuy = [
    { name: 'iPad', index: 5 },
    { name: 'MacBook', index: 3 },
    { name: 'iPhone', index: 2 }
];

test.describe('Add items to cart', () => {
    let basePage: BasePage;
    let mainPage: MainPage;
    let productPage: ProductPage;
    let cartPage: CartPage;

    test.beforeEach(async ({ page }) => {
        await page.goto('https://rozetka.com.ua/');
        basePage = new BasePage(page);
        mainPage = new MainPage(page);
        productPage = new ProductPage(page);
        cartPage = new CartPage(page);
    });

    itemsToBuy.forEach(({ name, index }) => {
        test(`Searches and adds to cart ${name}`, async ({ page }) => {
            await basePage.searchProduct(name);
            await expect(page).toHaveURL('search_text=${name}');

            await mainPage.selectProduct(index);
            await expect(productPage.getTileText()).toContain(name);

            await productPage.clickBuyButton();

            await cartPage.gotoCheckout();
            await expect(page).toHaveURL('/checkout/');
        });
    });

    test('Verifies correct products are in the cart', async () => {
        await cartPage.openCartPage();
        const itemCount = await cartPage.cartItems.count();
        expect(itemCount).toBe(itemsToBuy.length);

        for (const { name } of itemsToBuy) {
            const itemsText = await cartPage.cartItems.allTextContents();
            expect(itemsText).toContain(name);
        }
    });
});
