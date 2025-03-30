import { expect } from 'chai';
import { $, $$, browser } from '@wdio/globals';

const itemsToBuy = [
    { name: 'iPad', index: 5 },
    { name: 'MacBook', index: 3 },
    { name: 'iPhone', index: 2 }
];

describe('Add items to cart', () => {
    beforeEach(async () => {
        await browser.url('https://rozetka.com.ua/');
    });

    itemsToBuy.forEach(({ name, index }) => {
        it(`Searches and adds to cart ${name}`, async () => {
            const searchInput = await $("input[name='search']");
            await searchInput.setValue(name);
            const searchButton = await $('button.button_color_green');
            await searchButton.click();

            await expect(browser).contain(`search_text=${name}`);

            const productTiles = await $$('.goods-tile');
            await productTiles[index].click();

            const productTitle = await $('h1');
            await expect(productTitle).contain(name);

            const buyButton = await $('button.buy-button--tile');
            await buyButton.click();

            const checkoutLink = await $("a[href='https://rozetka.com.ua/ua/checkout/']");
            await checkoutLink.click();

            await expect(browser).contain('checkout');
        });
    });

    it('Verifies correct products are in the cart', async () => {
        const cartItems = await $$('.simplified-view');
        expect(cartItems.length).to.equal(itemsToBuy.length);

        for (const { name } of itemsToBuy) {
            const productTitle = await $('.checkout-product__title');
            await expect(productTitle).contain(name);
        }
    });
});
