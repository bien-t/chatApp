import SignPanel from '@/components/SignPanel/SignPanel';

const router = require('next/router');

describe('<Sign Panel />', () => {
  it('renders Sign in', () => {
    cy.stub(router, 'useRouter');
    cy.mount(<SignPanel signType="signin" panelTitle="Sign In" />);
  });
  it('renders Sign In elements', () => {
    cy.stub(router, 'useRouter');
    cy.mount(<SignPanel signType="signin" panelTitle="Sign In" />);
    cy.get('h2').should('include.text', 'Sign In').and('be.visible');
    cy.get('label').contains('Email address:', { matchCase: false }).should('be.visible');
    cy.get('input[type="email"]').should('be.visible');
    cy.get('label').contains('Password:', { matchCase: false }).should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
    cy.get('button').contains('sign in', { matchCase: false }).should('be.visible').and('be.disabled');
  });
  it('enables the sign in button after filling out the form', () => {
    cy.stub(router, 'useRouter');
    cy.mount(<SignPanel signType="signin" panelTitle="Sign In" />);
    cy.get('input[type="email"]').should('be.visible').type('example@example.com');
    cy.get('input[type="password"]').should('be.visible').type('password');
    cy.get('button').contains('sign in', { matchCase: false }).should('be.visible').and('not.be.disabled');
  });

  it('renders Sign up', () => {
    cy.stub(router, 'useRouter');
    cy.mount(<SignPanel signType="signup" panelTitle="Sign Up" />);
  });

  it('renders Sign Up elements', () => {
    cy.stub(router, 'useRouter');
    cy.mount(<SignPanel signType="signup" panelTitle="Sign Up" />);
    cy.get('h2').should('include.text', 'Sign Up').and('be.visible');
    cy.get('label').contains('Email address:', { matchCase: false }).should('be.visible');
    cy.get('input[type="email"]').should('be.visible');
    cy.get('label').contains('Username:', { matchCase: false }).should('be.visible');
    cy.get('input[name="username"]').should('be.visible');
    cy.get('label').contains('Password:', { matchCase: false }).should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.get('label').contains('Confirm password:', { matchCase: false }).should('be.visible');
    cy.get('input[name="passwordConfirm"]').should('be.visible');
    cy.get('button').contains('sign up', { matchCase: false }).should('be.visible').and('be.disabled');
  });

  it('enables the sign up button after filling out the form', () => {
    cy.stub(router, 'useRouter');
    cy.mount(<SignPanel signType="signup" panelTitle="Sign Up" />);
    cy.get('input[type="email"]').should('be.visible').type('example@example.com');
    cy.get('input[name="username"]').should('be.visible').type('Username');
    cy.get('input[name="password"]').should('be.visible').type('password');
    cy.get('input[name="passwordConfirm"]').should('be.visible').type('password');
    cy.get('button').contains('sign up', { matchCase: false }).should('be.visible').and('not.be.disabled');
  });
  it('shows a message, if the passwords are not the same ', () => {
    cy.stub(router, 'useRouter');
    cy.mount(<SignPanel signType="signup" panelTitle="Sign Up" />);
    cy.get('input[type="email"]').should('be.visible').type('example@example.com');
    cy.get('input[name="username"]').should('be.visible').type('Username');
    cy.get('input[name="password"]').should('be.visible').type('password');
    cy.get('input[name="passwordConfirm"]').should('be.visible').type('password123');
    cy.get('button').contains('sign up', { matchCase: false }).should('be.visible').and('be.disabled');
    cy.get('span').contains('Passwords are different').should('be.visible');
  });
});
