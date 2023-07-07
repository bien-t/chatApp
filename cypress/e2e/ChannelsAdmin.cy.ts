describe('Channels - admin', () => {
  it('checks admin functionality', () => {
    cy.task('defaults:db');
    cy.login();
    cy.get('li').contains('test1', { matchCase: false }).parent().find('svg')
      .should('be.visible')
      .click();

    cy.log('Check the password change function');
    cy.get('h2').contains('test').should('be.visible');
    cy.get('input[name="password"]').should('be.visible').type('123');
    cy.get('input[name="password"]').parent().next()
      .should('be.visible')
      .click();
    cy.get('li').contains('test1', { matchCase: false }).parent().should('have.class', 'protected');

    cy.log('Check the channel name change function');
    cy.get('input[name="channelName"]').should('be.visible').type('Changed name');
    cy.get('input[name="channelName"]').parent().next()
      .should('be.visible')
      .click();
    cy.get('li').contains('test1', { matchCase: false }).should('not.exist');
    cy.get('li').contains('Changed name', { matchCase: false }).should('be.visible');

    cy.log('Close the modal');
    cy.get('h2').contains('Changed name').next().click();
    cy.get('h2').contains('Changed name').should('not.exist');

    cy.log('Check the add channel function');
    cy.log('add a public channel');
    cy.get('button').contains('Add channel', { matchCase: false }).should('be.visible').click();
    cy.get('input[name="channel name"]').should('be.visible').type('New channel');
    cy.get('h2').contains('Add channel', { matchCase: false }).parent().parent()
      .find('button')
      .contains('add', { matchCase: false })
      .as('addButton')
      .should('be.visible')
      .click();

    cy.get('li').contains('New channel', { matchCase: false });
    cy.get('li').contains('New channel', { matchCase: false }).should('be.visible');

    cy.log('add a protected channel');
    cy.get('input[name="channel name"]').should('be.visible').type('{selectAll}{backspace}Protected channel');
    cy.get('input[name="password"]').should('be.visible').type('123');
    cy.get('@addButton').click();
    cy.get('li').contains('Protected channel', { matchCase: false }).should('be.visible').parent()
      .should('have.class', 'protected');

    cy.log('Close the modal');
    // eslint-disable-next-line cypress/no-force
    cy.get('h2').contains('Add channel').next().click({ force: true });
    cy.get('h2').contains('Add channel').should('not.exist');

    cy.log('Join the created channels');
    cy.get('li').contains('New channel', { matchCase: false }).click();
    cy.get('li').contains('New channel', { matchCase: false }).parent().should('have.class', 'active');
  });
});
