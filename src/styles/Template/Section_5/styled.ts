import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  .aside {
    width: 308px;
    height: 100%;
    margin-top: 140px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    h2 {
      font-size: 1.87rem;
    }
    div {
      max-width: 267px;
      margin-top: 25px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    @media (max-width: 900px) {
      margin: auto;
    }

    @media (max-width: 375px) {
      width: 90%;

      h2 {
        font-size: 1.25rem;
      }
      div {
        width: 100%;
        margin-top: 25px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        input {
          width: 100%;
          margin-right: 10px;
        }
      }
    }
  }
`;
