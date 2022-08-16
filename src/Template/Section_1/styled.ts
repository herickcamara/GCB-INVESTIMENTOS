import styled from "styled-components";

export const Container = styled.section`
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

  @media (max-width: 980px) {
    .aside {
      width: 50%;
      height: 100vh;
      display: flex;
      margin: auto;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      div {
        width: 100%;
      }
    }
  }
  @media (max-width: 768px) {
    height: 100vh;

    .aside {
      width: 70%;
      margin: auto;
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    div {
      width: 100%;
      margin-top: 25px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  @media (max-width: 453px) {
    .aside {
      width: 273px;
    }
  }

  @media (max-width: 321px) {
    .aside {
      width: 100%;
      text-align: start;
      h2 {
        margin-right: auto;

        font-size: 25px;

        color: var(--color-h2);
      }

      div {
        input {
          width: 100%;
          margin-right: 10px;
        }
      }
    }
  }
`;
