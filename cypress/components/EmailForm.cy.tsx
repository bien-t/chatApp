import EmailForm from '@/components/Profile/EmailForm';

describe('<EmailForm />', () => {
  it('renders', () => {
    cy.mount(<EmailForm />);
  });
  it('renders Email form elements', () => {
    cy.mount(<EmailForm />);
    cy.get('label').contains('Email:', { matchCase: false }).should('be.visible');
    cy.get('input[name="email"]').should('be.visible');
    cy.get('label').contains('Confirm email:', { matchCase: false }).should('be.visible');
    cy.get('input[name="confirmEmail"]').should('be.visible');
    cy.get('button').contains('Change email').should('be.visible').and('be.disabled');
  });
  it('enables the button after filling out the fields', () => {
    cy.mount(<EmailForm />);
    cy.get('input[name="email"]').type('example@example.com');
    cy.get('input[name="confirmEmail"]').type('example@example.com');
    cy.get('button').contains('Change email').should('be.visible').and('not.be.disabled');
  });
  it('shows a message, if the emails are not the same ', () => {
    cy.mount(<EmailForm />);

    cy.get('input[name="email"]').type('example@example.com');
    cy.get('input[name="confirmEmail"]').type('example@example');
    cy.get('span').contains('Emails are different').should('be.visible');

    cy.get('button').contains('Change email').should('be.visible').and('be.disabled');
  });
});
