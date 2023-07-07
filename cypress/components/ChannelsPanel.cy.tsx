import ChannelsPanel from '@/components/ChannelsPanel/ChannelsPanel';
import data from '@/cypress/fixtures/data.json';

describe('<ChannelsPanel />', () => {
  it('renders', () => {
    cy.mount(<ChannelsPanel />);
  });
  it('renders header and channel list', () => {
    cy.mount(<ChannelsPanel channelList={data.channelList}/>);
    cy.get('h2').should('include.text', 'Channel list').and('be.visible');
    cy.get('ul>li').should('have.length', `${data.channelList.length}`);
    cy.get('ul>li').eq(1).should('have.class', 'protected');
    cy.get('ul>li span').each((channelname, index)=>{
      expect(channelname).to.have.text(data.channelList[index].name);
    });
  });

  it('shows admin functions if the user is an admin', () => {
    cy.mount(<ChannelsPanel channelList={data.channelList} />, { loggedIn: true, admin: true });
    cy.get('button').contains('add channel', { matchCase: false });
    cy.get('ul>li>svg').should('have.length', `${data.channelList.length}`);
  });
});
