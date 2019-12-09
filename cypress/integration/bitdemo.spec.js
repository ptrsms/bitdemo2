context('Assertions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200')
  });

  describe('Visit the home page', () => {
    it('Should display the application title', () => {
      cy.get('.mat-toolbar>h3').should('contain', 'Bit Demo 2')
    });

    it('Should display the jumbotron title', () => {
      cy.get('bit-jumbotron h2').should('contain', 'Jumbo 2')
    });

    it('Should display the view less button', () => {
      cy.get('bit-jumbotron bit-button .uppercase').should('contain', 'view less')
    });

    it('Should navigate the next page and back', () => {
      cy.get('bit-jumbotron bit-button').click();
      cy.location('pathname').should('include', 'page2');
    });

    it('Should navigate back to the previous page', () => {
      cy.get('bit-jumbotron bit-button').click();
      cy.get('a').click();
      cy.location('pathname').should('include', 'page1');
    });


  });
});
