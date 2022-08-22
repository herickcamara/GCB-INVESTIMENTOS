import styled from "styled-components";

export const Container = styled.div`
  background: #f5f5f5;
  box-shadow: 2px 5px 10px #888;
  width: 90%;

  .areaHeader {
    padding: 10px 20px;
  }
  .contentArea {
    display: flex;

    padding: 20px;
    .infor {
      flex: 1;
      margin-right: 20px;

      input {
        width: 100%;
        padding: 10px;
        font-size: 1rem;
        border: none;
        border-bottom: 1px solid #ccc;
        margin: 20px 0px;
        background: none;
        outline: none;
      }

      button {
        width: 100%;
        flex: 1;
        margin-left: auto;
      }
    }

    section {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 10px;
      .gridArea {
        flex: 1;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }
      @media (max-width: 369px) {
        .gridArea {
          grid-template-columns: 1fr;
        }
      }
    }
    @media (max-width: 769px) {
      flex-direction: column;

      section {
        margin-top: 20px;
      }
    }
  }
`;
