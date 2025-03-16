import { Item } from 'cypress/interfaces/item';

describe('Add items to cart', () => {
    const itemsToBuy: Item[] = [
        { name: 'iPad', index: 5 },
        { name: 'MacBook', index: 3 },
        { name: 'iPhone', index: 2 }
    ];

    beforeEach(() => {
        cy.visit('https://rozetka.com.ua/');
    });

    itemsToBuy.forEach(({ name, index }: Item) => {
        it(`Searches and adds to cart ${name}`, () => {
            cy.get("input[name='search']").type(name);
            cy.get('button.button_color_green').click();
            cy.url().should('include', `search_text=${name}`);

            cy.get('.goods-tile').eq(index).click();
            cy.get('h1').should('contain', name);

            cy.get('button.buy-button--tile').click();
            cy.get("a[href='https://rozetka.com.ua/ua/checkout/']").click();
            cy.url().should('include', 'checkout');
        });
    });

    it('Verifies correct products are in the cart', () => {
        cy.get('.simplified-view').should('have.length', itemsToBuy.length);
        itemsToBuy.forEach(({ name }) => {
            cy.get('.checkout-product__title').should('contain', name);
        });
    });
});
