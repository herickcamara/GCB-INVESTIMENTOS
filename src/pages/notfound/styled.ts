import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: var(--color-h2);
  text-align: center;
  color: #f5f5f5;
  .subContainer {
    width: 344px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    min-height: 100vh;
    flex-direction: column;

    .error {
      display: flex;
      align-items: center;
      justify-content: center;
      h1 {
        font-size: 200px;
      }
    }
    .notFound {
      flex-direction: column;

      h2 {
        font-size: 50px;
      }
      h3 {
        font-size: 20px;
      }
    }
  }
`;
