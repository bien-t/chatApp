import styled from 'styled-components';

export const StyledProfile = styled.section`
  border: 2px solid #22c55e;
  color: #22c55e;
  padding: 0 5px 10px 5px;
  border-radius: 5px;
  width: 100%;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 5px;
  column-gap: 5px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 5px;
  label {
    font-size: 1.6rem;
    text-align: center;
  }
  button {
    align-self: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  span {
    text-align: center;
  }
`;
