import AddChannel from '@/components/AddChannel/AddChannel';

describe('<AddChannel />', () => {
  it('renders', () => {
    cy.mount(<AddChannel closeAddChannel={() => ''} />);
  });
  it('renders Add channel elements', () => {
    const close = cy.stub();
    cy.mount(<AddChannel closeAddChannel={cy.spy(close).as('close')} />);
    cy.get('label').contains('Channel name:', { matchCase: false }).should('be.visible');
    cy.get('input[name="channel name"]').should('be.visible');
    cy.get('label').contains('Channel password:', { matchCase: false }).should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
    cy.get('span').should('have.text', 'Leave the field empty if the channel is public.').and('be.visible');
    cy.get('button').contains('add', { matchCase: false }).should('be.visible');
    cy.get('svg').should('have.text', 'Close').click();
    cy.get('@close').should('be.called');
  });
});
