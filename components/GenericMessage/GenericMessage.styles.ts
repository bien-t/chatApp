import type { StyledMessageProps } from '@/types/types';
import styled, { css } from 'styled-components';

export const StyledMessage = styled.span<StyledMessageProps>`
  font-size: 1.6rem;
  ${({ type }) => {
    if (type === 'error') {
      return css`
        color: #ef4444;
      `;
    }
    if (type === 'success') {
      return css`
        color: #67e8f9;
      `;
    }
    return '';
  }}
`;
