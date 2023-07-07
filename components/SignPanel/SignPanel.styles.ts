import styled from 'styled-components';

export const StyledSignPanel = styled.section`
  border: 2px solid #22c55e;
  border-radius: 5px;
  width: 100%;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
  h2 {
    color: #22c55e;
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
  }

  form {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
    width: 80%;
    padding-top: 10px;
    padding-bottom: 10px;

    label {
      align-self: flex-start;
      color: #22c55e;
      font-size: 1.6rem;
    }
    input {
      width: 100%;
    }

    button {
      margin-top: 5px;
    }
  }
`;
