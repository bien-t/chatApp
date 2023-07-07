import Header from '@/components/Header/Header';
import data from '@/cypress/fixtures/data.json';

const router = require('next/router');

describe('<Header />', () => {
  it('renders', () => {
    cy.stub(router, 'useRouter');
    cy.mount(<Header />);
  });
  it('renders the title and sign buttons', () => {
    cy.stub(router, 'useRouter');
    cy.mount(<Header />);
    cy.get('h1').should('include.text', 'Chat App').and('be.visible');
    cy.get('button').contains('sign up', { matchCase: false }).should('be.visible');
    cy.get('button').contains('sign in', { matchCase: false }).should('be.visible');
  });
  it('shows the welcome message when the user is logged in, profile link should sign out button', () => {
    cy.stub(router, 'useRouter');
    cy.mount(<Header />, { loggedIn: true });
    cy.get('span').should('include.text', `Welcome, ${data.userData.email}!`).should('be.visible');
    cy.get('a[href="/profile"]').should('be.visible');
    cy.get('button').contains('sign up', { matchCase: false }).should('not.exist');
    cy.get('button').contains('sign in', { matchCase: false }).should('not.exist');
    cy.get('button').contains('sign out', { matchCase: false }).should('be.visible');
  });
});
