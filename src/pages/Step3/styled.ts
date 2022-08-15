import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  h2 {
    font-size: 28px;
    color: var(--color-h2);
  }

  font-size: 18px;
  color: var(--color-p);
  hr {
    height: 2px;
    border: none;
    background-color: var(--color-h2);
  }
  div {
    gap: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    label {
      margin-top: 10px;
      input {
        margin-top: 7px;
        display: block;
      }
    }
  }
  .btnArea {
    display: flex;
    gap: 10px;
  }
`;
