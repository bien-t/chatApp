import styled from 'styled-components';

export const StyledMessagePanel = styled.section`
  grid-area: bottom;
  width: 100%;
  background-color: #222425;
  border-top: 2px solid #22c55e;
  padding: 10px;
  align-self: flex-end;
`;

export const MessageWrapper = styled.div`
  display: flex;
  input {
    width: 100%;
    margin-right: 10px;
  }

  @media (max-width: 500px) {
    input {
      margin-right: 0;
      font-size: 1.4rem;
      padding: 11px 20px;
    }
    flex-wrap: wrap;
    button {
      margin-top: 10px;
      width: 100%;
      padding: 10px 16px;
      font-size: 2rem;
    }
  }
`;
