import AvatarForm from '@/components/Profile/AvatarForm';

describe('<AvatarForm />', () => {
  it('renders', () => {
    cy.mount(<AvatarForm />);
  });
  it('renders Avatar form elements', () => {
    cy.mount(<AvatarForm />);
    cy.get('label').contains('Avatar url:', { matchCase: false }).should('be.visible');
    cy.get('input[name="avatar url"]').should('be.visible');
    cy.get('button').contains('Change avatar').should('be.visible').and('be.disabled');
  });
  it('enables the button after filling out the field', () => {
    cy.mount(<AvatarForm />);
    cy.get('input[name="avatar url"]').type('http://example.com');
    cy.get('button').contains('Change avatar').should('be.visible').and('not.be.disabled');
  });
  it('shows the user avatar', () => {
    cy.mount(<AvatarForm />, { loggedIn: true, admin: false });
    cy.get('img').should('be.visible');
  });
});
