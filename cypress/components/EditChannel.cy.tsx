import EditChannel from '@/components/EditChannel/EditChannel';
import data from '@/cypress/fixtures/data.json';

describe('<EditChannel />', () => {
  it('renders', () => {
    cy.mount(<EditChannel channelId={data.channelList[0]._id} channelName={data.channelList[0].name} closeEditOptions={()=>''} />);
  });
  it('renders Edit channel elements', () => {
    const close = cy.stub();
    cy.mount(<EditChannel channelId={data.channelList[0]._id} channelName={data.channelList[0].name} closeEditOptions={cy.spy(close).as('close')} />);
    cy.get('h2').should('include.text', `Edit channel - ${data.channelList[0].name}`).and('be.visible');
    cy.get('label').contains('Set/Change password:', { matchCase: false }).should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
    cy.get('label').contains('Change channel name:', { matchCase: false }).should('be.visible');
    cy.get('input[name="channelName"]').should('be.visible');
    cy.get('button').should('have.length', '2').each(button=>{
      expect(button).to.have.text('Submit');
    });
    cy.get('svg').should('have.text', 'Close').click();
    cy.get('@close').should('be.called');
  });
});
