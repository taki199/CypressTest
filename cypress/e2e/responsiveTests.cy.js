describe('Tests de la Réactivité de la Page de Connexion', () => {
  beforeEach(() => {
    
    cy.visit('http://localhost:3000/login'); 
  });

  it('Vérifie la visibilité des éléments de connexion', () => {
   
    cy.checkLoginElementsVisibility();
  });

  it('Vérifie la mise en page responsive de la page de connexion', () => {
    // Test for mobile view
    cy.viewport(375, 667); 
    cy.verifyLoginResponsiveLayout(); 

    // Test for tablet view
    cy.viewport(768, 1024); 
    cy.verifyLoginResponsiveLayout(); 

    // Test for desktop view
    cy.viewport(1280, 800); 
    cy.verifyLoginResponsiveLayout(); 
  });
});