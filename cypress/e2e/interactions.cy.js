describe('Interactions avec les éléments sur la page de connexion', () => {
  beforeEach(() => {
    
    cy.visit('http://localhost:3000/login');
  });

  it('Remplit le formulaire de connexion et vérifie la navigation vers le tableau de bord', () => {
    // Remplit le champ de texte pour le nom d'utilisateur
    cy.get('input[type="text"]').type('testuser'); 
    
    // Remplit le champ de texte pour le mot de passe
    cy.get('input[type="password"]').type('password'); 
    
    // Soumet le formulaire en cliquant sur le bouton "Submit"
    cy.get('button[type="submit"]').click();
    
    // Vérifie que la navigation vers le tableau de bord est réussie
    cy.url().should('include', '/dashboard'); // S'assurer que l'URL contient '/dashboard'
  });

  it('Affiche un message d\'erreur pour des informations d\'identification invalides', () => {
    // Remplit le champ de texte pour le nom d'utilisateur avec une valeur invalide
    cy.get('input[type="text"]').type('invaliduser'); 
    
    // Remplit le champ de texte pour le mot de passe avec une valeur invalide
    cy.get('input[type="password"]').type('invalidpassword'); 
    
    // Soumet le formulaire
    cy.get('button[type="submit"]').click();
    
    // Vérifie que le message d'erreur est affiché en cas de mauvaise identification
    cy.get('.text-red-500').should('contain', 'Nom d\'utilisateur ou mot de passe incorrect.'); 
  });
});
