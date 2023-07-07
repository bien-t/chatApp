import styled from 'styled-components';

export const StyledUserChat = styled.section<{ $messageFontSize: string }>`
  grid-area: center;
  display: grid;
  height: 100%;
  overflow-y: auto;
  color: #22c55e;
  font-size: ${({ $messageFontSize }) => `${$messageFontSize}rem`};
  @media (max-width: 800px) {
    grid-area: center2;
  }
`;

export const MessagesWrapper = styled.div`
  padding: 5px 0;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
`;
export const SingleMessage = styled.div`
  border-bottom: 1px solid #3f4243;
  border-top: 1px solid #3f4243;
  padding: 3px 5px;
  display: flex;
  align-items: center;
  column-gap: 5px;
  span {
    &:nth-of-type(1) {
      color: #fb7185;
    }
    &:nth-last-child(1) {
      font-size: 1.3rem;
      margin-left: auto;
      text-align: center;
      max-width: 70px;
    }
  }
`;
