import styled from 'styled-components';

export const StyledEditChannel = styled.div`
  border: 2px solid #22c55e;
  color: #22c55e;
  padding: 0 5px 10px 5px;
  border-radius: 5px;
  width: 100%;
  max-width: 500px;
  transform: translateX(-50%);
  margin-left: 50%;
  display: grid;
  position: absolute;
  top: 10%;
  background-color: #1b1c1d;
  z-index: 2;
`;

export const Header = styled.div`
  font-size: 2rem;
  display: grid;
  grid-template-columns: 1fr 15px;
  position: relative;
  width: 100%;
  svg {
    color: #fb7185;
    cursor: pointer;
  }
  h2 {
    text-align: center;
  }
`;
export const RowWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 10px;
  margin-bottom: 10px;
  text-align: center;
  label {
    font-size: 1.5rem;
  }

  button {
    margin-bottom: 0 !important;
    align-self: flex-end;
  }

  input {
    width: 100%;
    @media (max-width: 500px) {
      padding-top: 7px;
      padding-bottom: 7px;
    }
  }
`;
