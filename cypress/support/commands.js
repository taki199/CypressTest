Cypress.Commands.add('checkLoginElementsVisibility', () => {
    cy.get('input[type="text"]').should('be.visible');
    cy.get('input[type="password"]').should('be.visible'); 
    cy.get('button[type="submit"]').should('be.visible'); 
  });
  

  Cypress.Commands.add('verifyLoginResponsiveLayout', () => {
    cy.get('form').then((form) => {
      const width = Cypress.config('viewportWidth');
      if (width < 768) {
        expect(form).to.have.css('flex-direction', 'column'); 
      } else {
        expect(form).to.have.css('flex-direction', 'row'); 
      }
    });
  });