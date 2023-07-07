describe('Signing-up', () => {
  it('follows the user signing-up process', () => {
    cy.task('defaults:db');
    cy.visit('http://localhost:3000/signup');
    cy.log('Change the page to the sign-up page');
    cy.get('button').contains('sign up', { matchCase: false }).should('be.visible').click();
    cy.url().should('include', 'signup');

    cy.log('Fill the fields with existing user data');
    cy.get('input[type="email"]').should('be.visible').type('kkk@kkk.pl');
    cy.get('input[name="username"]').should('be.visible').type('kkk');
    cy.get('input[name="password"]').should('be.visible').type('123');
    cy.get('input[name="passwordConfirm"]').should('be.visible').type('123');
    cy.get('form').find('button').contains('sign up', { matchCase: false }).should('be.visible')
      .and('not.be.disabled')
      .as('signUpButton')
      .click();
    cy.log('Show an error message');
    cy.get('span').contains('This email is already in use. Just sign in.').should('be.visible');

    cy.log('Fill the fields with new user data');
    cy.get('input[type="email"]').should('be.visible').type('{selectAll}{backspace}ttt@ttt.com');
    cy.get('input[name="username"]').should('be.visible').type('{selectAll}{backspace}ttt');
    cy.get('input[name="password"]').should('be.visible').type('{selectAll}{backspace}123');
    cy.get('input[name="passwordConfirm"]').should('be.visible').type('{selectAll}{backspace}123');
    cy.get('@signUpButton').click();
    cy.log('Show the main page');
    cy.get('span').should('include.text', 'Welcome, ttt@ttt.com!').should('be.visible');
  });
});
