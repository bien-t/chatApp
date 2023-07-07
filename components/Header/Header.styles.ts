import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: #22c55e;
  padding: 10px;
  align-items: center;
  border-bottom: 2px solid #22c55e;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-size: 1.6rem;
`;
