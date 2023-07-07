import MessagePanel from '@/components/MessagePanel/MessagePanel';

describe('<MessagePanel />', () => {
  it('renders', () => {
    cy.mount(<MessagePanel />);
  });
  it('renders Message panel elements', () => {
    cy.mount(<MessagePanel />);
    cy.get('input[name="message input"]').should('be.visible');
    cy.get('button[type="submit"]').should('have.attr', 'title', 'Send').and('be.disabled');
  });
  it('checks whether the button is enabled after entering a message', ()=>{
    cy.mount(<MessagePanel />);
    cy.get('input[name="message input"]').type('Test message');
    cy.get('button[type="submit"]').should('not.be.disabled');
  });
});
