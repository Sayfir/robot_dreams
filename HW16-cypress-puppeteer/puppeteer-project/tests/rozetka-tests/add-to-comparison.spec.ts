import { expect } from 'chai';
import puppeteer, { Page, Browser, BrowserContext } from 'puppeteer';

describe('Rozetka Comparison Mode', () => {
    const item = 'iPad';
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    // Function to add item to comparison
    const addItemToComparison = async (searchTerm: string, index: number): Promise<void> => {
        await page.type("input[name='search']", searchTerm);
        await page.click('button.button_color_green');
        await page.waitForNavigation();
        await page.waitForSelector('.goods-tile__picture');
        await page.click(`.goods-tile__picture:nth-of-type(${index + 1})`);
        await page.waitForSelector('button.compare-button');
        await page.click('button.compare-button');
    };

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

    it('Should add two items to the comparison and open the comparison screen', async () => {
        await page.goto('https://rozetka.com.ua/ua/');

        // Add first item to comparison
        await addItemToComparison(item, 0);

        // Add second item to comparison
        await addItemToComparison(item, 1);

        // Open the comparison screen
        await page.click('a[href="https://rozetka.com.ua/ua/comparison/"]');
        await page.waitForNavigation();

        const url = page.url();
        expect(url).contain('/comparison');

        const comparisonItems = await page.$$eval('li.ul-i', (items) => items.length);
        expect(comparisonItems).be.eq(2);
    });
});
