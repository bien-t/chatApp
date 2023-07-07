import styled, { css } from 'styled-components';

export const StyledUsersPanel = styled.section`
  grid-area: right;
  border-left: 2px solid #22c55e;
  overflow-y: auto;
  color: #22c55e;
  background-color: #222425;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    grid-area: center;
    border: none;
    max-height: 200px;
    border-bottom: 2px solid #22c55e;
    border-left: none;
  }
  ul {
    list-style-type: none;
    font-size: 1.4rem;
    text-transform: uppercase;
    border-bottom: 2px solid #3f4243;
    height: 100%;
    overflow-y: auto;
    padding-left: 10px;
  }
`;

export const IconsWrapper = styled.div`
  justify-self: flex-end;
  svg {
    margin-right: 5px;
    font-size: 1.8rem;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const HeaderWrapper = styled.div<{ $showBorder: boolean }>`
  display: flex;
  ${({ $showBorder }) => {
    return $showBorder
      ? css`
          border-bottom: 2px solid #3f4243;
        `
      : '';
  }}

  button {
    color: #22c55e;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    border: none;
    border-right: 2px solid #22c55e;
    height: 100%;
    font-size: 2rem;
    width: 47px;
    background: none;
    cursor: pointer;
    &:hover {
      color: #3f4243;
      background-color: #22c55e;
    }
  }
  h2 {
    width: 100%;
    text-align: center;
    font-size: 2rem;
    text-transform: uppercase;
    margin: 0;
    padding: 10px 0;
    @media (max-width: 500px) {
      font-size: 1.6rem;
    }
  }
`;

export const StyledLi = styled.li<{ index: number }>`
  display: grid;
  grid-template-columns: 20px 1fr minmax(50px, auto);
  margin-bottom: 5px;

  span {
    margin-left: 5px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  &:nth-of-type(${({ index }) => index}) {
    font-weight: bold;
  }
`;
