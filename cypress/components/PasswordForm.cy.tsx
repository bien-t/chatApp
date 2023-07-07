import PasswordForm from '@/components/Profile/PasswordForm';

describe('<PasswordForm />', () => {
  it('renders', () => {
    cy.mount(<PasswordForm />);
  });
  it('renders Password form elements', () => {
    cy.mount(<PasswordForm />);
    cy.get('label').contains('Password:', { matchCase: false }).should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.get('label').contains('Confirm password:', { matchCase: false }).should('be.visible');
    cy.get('input[name="confirmPassword"]').should('be.visible');
    cy.get('button').contains('Change password').should('be.visible').and('be.disabled');
  });
  it('enables the button after filling out the fields', () => {
    cy.mount(<PasswordForm />);
    cy.get('input[name="password"]').type('password');
    cy.get('input[name="confirmPassword"]').type('password');
    cy.get('button').contains('Change password').should('be.visible').and('not.be.disabled');
  });
  it('shows a message, if the password are not the same ', () => {
    cy.mount(<PasswordForm />);
    cy.get('input[name="password"]').type('password');
    cy.get('input[name="confirmPassword"]').type('password123');
    cy.get('span').contains('Passwords are different').should('be.visible');
    cy.get('button').contains('Change password').should('be.visible').and('be.disabled');
  });
});
