import { expect } from 'chai';
import puppeteer, { Browser, BrowserContext, Page } from 'puppeteer';

describe('Add items to cart', () => {
    const itemsToBuy = [
        { name: 'iPad', index: 5 },
        { name: 'MacBook', index: 3 },
        { name: 'iPhone', index: 2 }
    ];

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    before(async () => {
        browser = await puppeteer.launch({ headless: false, defaultViewport: { width: 1200, height: 800 } });
    });

    beforeEach(async () => {
        context = await browser.createBrowserContext();
        page = await context.newPage();
        await page.goto('https://rozetka.com.ua/');
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });

    after(async () => {
        await browser.close();
    });

    itemsToBuy.forEach(({ name, index }) => {
        it(`Searches and adds to cart ${name}`, async () => {
            await page.type("input[name='search']", name);
            await page.click('button.button_color_green');
            await page.waitForNavigation();
            const url = await page.url();
            expect(url).contain(`search_text=${name}`);

            await page.click(`.goods-tile:nth-child(${index + 1})`);
            await page.waitForSelector('h1');
            const productTitle = await page.$eval('h1', (el) => el.textContent);
            expect(productTitle).contain(name);

            await page.click('button.buy-button--tile');
            await page.click("a[href='https://rozetka.com.ua/ua/checkout/']");
            await page.waitForNavigation();
            const checkoutUrl = await page.url();
            expect(checkoutUrl).contain('checkout');
        });
    });

    it('Verifies correct products are in the cart', async () => {
        const cartItems = await page.$$('.simplified-view');
        expect(cartItems.length).be.eq(itemsToBuy.length);

        for (const { name } of itemsToBuy) {
            const productTitle = await page.$eval('.checkout-product__title', (el) => el.textContent);
            expect(productTitle).contain(name);
        }
    });
});
