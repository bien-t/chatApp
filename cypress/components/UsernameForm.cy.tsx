import UsernameForm from '@/components/Profile/UsernameForm';

describe('<UsernameForm />', () => {
  it('renders', () => {
    cy.mount(<UsernameForm />);
  });
  it('renders Username form elements', () => {
    cy.mount(<UsernameForm />);
    cy.get('label').contains('Username:', { matchCase: false }).should('be.visible');
    cy.get('input[name="username"]').should('be.visible');
    cy.get('button').contains('Change username').should('be.visible').and('be.disabled');
  });
  it('enables the button after filling out the field', () => {
    cy.mount(<UsernameForm />);
    cy.get('input[name="username"]').type('Username');
    cy.get('button').contains('Change username').should('be.visible').and('not.be.disabled');
  });
});
