import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  h2 {
    font-size: 28px;
    color: #f5f5f5;
  }

  font-size: 18px;
  color: var(--color-p);
  hr {
    height: 2px;
    border: none;
    background-color: var(--color-h2);
  }

  label {
    input {
      margin-top: 7px;
      display: block;
    }
  }
`;
