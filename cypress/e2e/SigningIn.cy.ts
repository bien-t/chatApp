describe('Signing-in', () => {
  it('follows the user signing-in process', () => {
    cy.task('defaults:db');
    cy.visit('http://localhost:3000');
    cy.log('Fill the fields with fake user data');
    cy.get('input[type="email"]').should('be.visible').type('example@example.com');
    cy.get('input[type="password"]').should('be.visible').type('password');
    cy.get('form').find('button').contains('sign in', { matchCase: false }).should('be.visible')
      .and('not.be.disabled')
      .as('signInButton')
      .click();
    cy.log('Show an error message');
    cy.get('span').contains('Invalid login').should('be.visible');
    cy.log('Fill the fields with correct user data');
    cy.get('input[type="email"]').should('be.visible').type('{selectAll}{backspace}kkk@kkk.pl');
    cy.get('input[type="password"]').should('be.visible').type('{selectAll}{backspace}123');
    cy.get('@signInButton').click();
    cy.log('Show the main page');
    cy.get('span').should('include.text', 'Welcome, kkk@kkk.pl!').should('be.visible');
  });
});
