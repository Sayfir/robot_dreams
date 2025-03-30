import { expect } from 'chai';
import { browser } from '@wdio/globals';
import { BasePage } from 'src/pages/base-page';
import { MainPage } from '../../src/pages/main-page';
import { ProductPage } from 'src/pages/product-page';
import { CartPage } from '../../src/pages/cart-page';

const itemsToBuy = [
    { name: 'iPad', index: 5 },
    { name: 'MacBook', index: 3 },
    { name: 'iPhone', index: 2 }
];

let basePage: BasePage;
let mainPage: MainPage;
let productPage: ProductPage;
let cartPage: CartPage;

describe('Add items to cart', () => {
    beforeEach(async () => {
        await browser.url('https://rozetka.com.ua/');
        basePage = new BasePage();
        mainPage = new MainPage();
        productPage = new ProductPage();
        cartPage = new CartPage();
    });

    itemsToBuy.forEach(({ name, index }) => {
        it(`Searches and adds to cart ${name}`, async () => {
            basePage.searchProduct(name);
            await expect(browser).to.contain(`search_text=${name}`);

            mainPage.selectProduct(index);
            await expect(productPage.getTileText(name)).contain(name);

            productPage.clickBuyButton();

            cartPage.gotoCheckout();
            await expect(browser).to.contain('checkout');
        });
    });

    it('Verifies correct products are in the cart', async () => {
        cartPage.openCartPage();
        expect(cartPage.cartItems.length).to.equal(itemsToBuy.length - 1);

        for (const { name } of itemsToBuy) {
            await expect(cartPage.cartItems).contain(name);
        }
    });
});
