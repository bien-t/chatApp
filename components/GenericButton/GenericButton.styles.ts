import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  font-weight: 700;
  display: inline-block;
  border: 2px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  color: #22c55e;
  background-color: #334155;
  text-transform: uppercase;
  font-size: 1.4rem;
  padding: 11px 20px;
  @media (max-width: 500px) {
    padding: 7px 16px;
  }
  &:not(:disabled):hover {
    border: 2px solid #22c55e;
    background-color: rgba(51, 65, 85, 0.9);
  }

  ${({ disabled }) => {
    return (
      disabled
      && css`
        background-color: #64748b;
        color: white;
        cursor: not-allowed;
      `
    );
  }}
`;
