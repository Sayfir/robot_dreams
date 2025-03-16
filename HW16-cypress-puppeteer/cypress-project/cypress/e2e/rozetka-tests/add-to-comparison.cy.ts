describe('Rozetka Comparison Mode', () => {
    const item = 'iPad';

    //In Cypress this function can be added to support/commands.ts
    const addItemToComparison = (searchTerm: string, index: number): void => {
        cy.get("input[name='search']").clear().type(searchTerm);
        cy.get('button.button_color_green').click();
        cy.url().should('include', `search_text=${searchTerm}`);
        cy.get('.goods-tile__picture').eq(index).click();
        cy.get('button.compare-button').click();
    };

    it('Should add two items to the comparison and open the comparison screen', () => {
        cy.visit('https://rozetka.com.ua/ua/');

        // Add first item to comparison
        addItemToComparison(item, 0);

        // Add second item to comparison
        addItemToComparison(item, 1);

        // Open the comparison screen
        cy.get('a[href="https://rozetka.com.ua/ua/comparison/"]').click();
        cy.url().should('include', '/comparison');
        cy.get('li.ul-i').should('have.length', 2);
    });
});
