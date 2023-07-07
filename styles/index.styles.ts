import styled from 'styled-components';

export const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  max-height: calc(100% - 76px);
  display: grid;
  grid-template-areas:
    'left center right'
    'left  bottom  right';
  grid-template-columns: minmax(auto, 300px) 1fr minmax(auto, 300px);
  grid-template-rows: auto 69px;
  @media (max-width: 1000px) {
    grid-template-columns: minmax(auto, 220px) 1fr minmax(auto, 220px);
  }
  @media (max-width: 800px) {
    grid-template-areas: 'top' 'center' 'center2' 'bottom';
    grid-template-columns: 1fr;
    grid-template-rows: max-content max-content auto max-content;
  }
`;
