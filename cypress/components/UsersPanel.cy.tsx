import UsersPanel from '@/components/UsersPanel/UsersPanel';
import data from '@/cypress/fixtures/data.json';

describe('<UsersPanel />', () => {
  it('renders', () => {
    cy.mount(<UsersPanel />);
  });
  it('renders header and user list', () => {
    cy.mount(<UsersPanel userList={data.userList}/>, { loggedIn: true, admin: false });
    cy.get('h2').should('include.text', 'Users on the channel').and('be.visible');
    cy.get('ul>li').should('have.length', `${data.channelList.length}`);
    cy.get('ul>li img').should('have.length', `${data.channelList.length}`);
    cy.get('ul>li span').each((username, index)=>{
      expect(username).to.have.text(data.userList[index].username);
    });

    cy.get('ul>li svg').each((singleSvg)=>{
      expect(singleSvg).to.have.text('Private chat');
    });
  });

  it('shows admin functions if the user is an admin', () => {
    cy.mount(<UsersPanel userList={data.userList} />, { loggedIn: true, admin: true });
    cy.get('ul>li svg').filter(':contains("Kick")').should('have.length', `${data.channelList.length}`);
  });
});
