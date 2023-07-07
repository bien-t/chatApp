describe('Channels - user', () => {
  it('checks channel interactions', () => {
    cy.task('defaults:db');
    cy.login();
    cy.log('Select a public channel');
    cy.get('li').contains('test1', { matchCase: false }).should('be.visible').as('channel')
      .click();
    cy.get('@channel').parent().should('have.class', 'active');
    cy.log('Show channel previous messages');
    cy.get('section').eq(1).find('div>div').should('have.length.greaterThan', 0);

    cy.log('Send a new message');
    cy.get('button[type="submit"]').should('be.visible').and('be.disabled');
    cy.get('input[name="message input"]').should('be.visible').type('New message');
    cy.get('button[type="submit"]').should('be.visible').and('not.be.disabled').click();
    cy.log('The message is visible and published by the signed user');
    cy.get('section').eq(1).find('div>div span').contains('New message')
      .should('be.visible')
      .prev()
      .should('have.text', 'kkk');

    cy.log('Change the channel to a protected channel');
    cy.get('li').contains('test2', { matchCase: false }).should('be.visible').as('protectedChannel')
      .click();
    cy.log('Show password input and enter the password');
    cy.get('@protectedChannel').next().find('input[type="password"]').should('be.visible')
      .type('12');
    cy.get('@protectedChannel').next().find('button[type="button"]').should('be.visible')
      .click();
    cy.get('@channel').parent().should('not.have.class', 'active');
    cy.get('@protectedChannel').parent().should('have.class', 'active');
  });
});
