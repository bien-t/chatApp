import type { StyledInputProps } from '@/types/types';
import styled, { css } from 'styled-components';

const getSizeStyles = ({ $styleSize = 'medium' }) => {
  switch ($styleSize) {
    case 'small': {
      return css`
        font-size: 1.2rem;
        padding: 10px 16px;
      `;
    }
    case 'large': {
      return css`
        font-size: 1.6rem;
        padding: 12px 24px;
      `;
    }
    default: {
      return css`
        font-size: 1.4rem;
        padding: 11px 20px;
      `;
    }
  }
};

export const StyledInput = styled.input<StyledInputProps>`
  border: 2px solid #22c55e;
  border-radius: 5px;
  color: #22c55e;
  background-color: #334155;

  &:focus {
    outline-color: #1d4ed8;
    outline-width: 3px;
    outline-style: solid;
  }

  &:invalid {
    border-color: #ef4444;
  }
  ${(props) => getSizeStyles(props)}
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
