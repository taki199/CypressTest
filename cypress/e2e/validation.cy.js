describe('Validation d\'éléments sur la page de connexion', () => {
  beforeEach(() => {
  
    cy.visit('http://localhost:3000/login');
  });

  it('Vérifie la présence du bouton Soumettre et des champs de texte', () => {
    
    cy.get('button[type="submit"]').should('exist').and('have.text', 'Submit');
    
    
    cy.get('input[type="text"]').should('exist');

    
    cy.get('input[type="password"]').should('exist');
  });
});