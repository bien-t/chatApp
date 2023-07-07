describe('Profile', () => {
  it('checks profile settings', () => {
    cy.task('defaults:db');
    cy.login();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);
    cy.get('a[href="/profile"]').should('be.visible').click();
    cy.url().should('include', '/profile');
    cy.get('h2').contains('Change your data', { matchCase: false }).should('be.visible');

    cy.log('Change an email to already taken');
    cy.get('input[name="email"]').should('be.visible').type('kkk@kkk.pl');
    cy.get('input[name="confirmEmail"]').should('be.visible').type('kkk@kkk.pl');
    cy.get('button').contains('Change email').should('be.visible').and('not.be.disabled')
      .click();
    cy.get('span').contains('This email is already in use.').should('be.visible');

    cy.log('Change an email to not used');
    cy.get('input[name="email"]').should('be.visible').type('{selectAll}{backspace}lll@kkk.pl');
    cy.get('input[name="confirmEmail"]').should('be.visible').type('{selectAll}{backspace}lll@kkk.pl');
    cy.get('button').contains('Change email').click();
    cy.get('header').find('span').contains('Welcome, lll@kkk.pl!').should('be.visible');

    cy.log('Change a password');
    cy.get('button').contains('Password').should('be.visible').click();
    cy.get('input[name="password"]').should('be.visible').type('12345');
    cy.get('input[name="confirmPassword"]').should('be.visible').type('12345');
    cy.get('button').contains('Change password').should('be.visible').and('not.be.disabled')
      .click();

    cy.log('Change a username');
    cy.get('button').contains('Username').should('be.visible').click();
    cy.get('input[name="username"]').should('be.visible').type('New username');
    cy.get('button').contains('Change username').should('be.visible').and('not.be.disabled')
      .click();

    cy.log('Change an avatar');
    cy.get('button').contains('Avatar').should('be.visible').click();
    cy.get('input[name="avatar url"]').should('be.visible').type('https://www.pngarts.com/files/5/Avatar-Face-Transparent.png');
    cy.get('button').contains('Change avatar').should('be.visible').and('not.be.disabled')
      .click();
    cy.get('img').should('have.attr', 'src', 'https://www.pngarts.com/files/5/Avatar-Face-Transparent.png');

    cy.log('Sign out and log in with new user credentials');
    cy.get('button').contains('sign out', { matchCase: false }).should('be.visible').click();
    cy.get('input[type="email"]').type('lll@kkk.pl');
    cy.get('input[type="password"]').type('12345');
    cy.get('form').find('button').contains('sign in', { matchCase: false }).click();
  });
});
