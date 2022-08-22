import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-size: 28px;
    color: var(--color-h2);
  }
  .form {
    min-width: 160px;
    padding: 20px;
    margin: 20px 0px;
    border: 1px solid var(--bg-color);
    border-radius: 8px;
    background-color: #f5f5f5;
    display: grid;
    gap: 10px;

    .areaBtn {
      display: flex;
      justify-content: end;
      margin-top: 20px;
    }
    @media (max-width: 277px) {
      width: 90%;

      input {
        width: 100%;
      }
    }
  }
  p {
    font-size: 18px;
    font-weight: bold;
    color: var(--color-h2);
  }
  a {
    color: var(--bg-button);
    &:hover {
      color: #222;
    }
  }
  @media (max-width: 277px) {
    width: 100%;
    text-align: center;
  }
`;
