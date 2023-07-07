import styled from 'styled-components';

export const StyledPrivateChat = styled.div<{ position: { top: number; left: number } }>`
  position: absolute;
  border: 3px solid #22c55e;
  color: #22c55e;
  border-radius: 5px;
  width: 100%;
  max-width: 500px;
  max-height: 410px;
  top: ${({ position }) => `${position.top}px`};
  left: ${({ position }) => `${position.left}px`};
  background-color: #1b1c1d;
  z-index: 9998;
  resize: both;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    max-width: 280px;
  }
`;

export const Header = styled.div`
  border-bottom: 3px solid #22c55e;
  padding: 5px;
  font-size: 2rem;
  color: #fb7185;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  svg {
    cursor: pointer;
  }
  user-select: none;
`;

export const ChatWrapper = styled.div`
  overflow-y: auto;
  max-height: 300px;
  font-size: 1.4rem;
`;
