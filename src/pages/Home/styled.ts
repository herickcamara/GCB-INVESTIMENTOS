import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  .aside {
    width: 50%;
    height: 100%;
    margin-top: 140px;

    h2 {
      font-size: 44px;
      color: var(--color-h2);
    }
    div {
      max-width: 267px;
      margin-top: 25px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
