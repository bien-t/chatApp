import type { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { renderToStaticMarkup } from 'react-dom/server';
import { FaLock } from 'react-icons/fa';

export function encodeSvg(reactElement: ReactElement) {
  return `data:image/svg+xml,${encodeURIComponent(renderToStaticMarkup(reactElement))}`;
}

export const StyledChannelsPanel = styled.section`
  grid-area: left;
  border-right: 2px solid #22c55e;
  width: 100%;
  color: #22c55e;
  background-color: #222425;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  @media (max-width: 800px) {
    grid-area: top;
    border-bottom: 2px solid #22c55e;
    border-right: none;

    max-height: 200px;
    overflow-y: auto;
  }

  ul {
    list-style-type: none;
    font-size: 1.4rem;
    text-transform: uppercase;
    border-bottom: 2px solid #3f4243;
    height: 100%;
    overflow-y: auto;
    position: relative;
  }
  button {
    margin-top: auto;
    align-self: center;
    margin-bottom: 10px;
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

export const StyledLi = styled.li`
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 95%;

  span {
    position: relative;
    z-index: 1;
    &:hover {
      cursor: pointer;
      font-weight: bold;
    }
  }

  svg {
    float: right;
    z-index: 2;
    position: relative;
    font-size: 1.8rem;

    &:hover {
      cursor: pointer;
    }
    &:hover + span {
      font-weight: bold;
    }
  }

  &.active,
  &.protected {
    &::before {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: 10px;
      width: 20px;
    }
  }
  &.active::before {
    content: '\\27A4';
    font-weight: bold;
  }
  &.protected::before {
    content: ${() => `url(${encodeSvg(<FaLock color="#22c55e" />)})`};
  }
`;

export const PasswordWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  input {
    font-size: 1.2rem;
    width: 100%;
    padding: 5px 5px;
  }
  button {
    font-size: 1.2rem;
    margin-bottom: 0;
    padding: 5px 10px;
    svg {
      font-size: 1.4rem;
    }
  }
`;
