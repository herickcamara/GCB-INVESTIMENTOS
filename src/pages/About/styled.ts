import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SubContainer = styled.div`
  width: 500px;
  .infor {
    box-shadow: 2px 5px 10px #888;
    padding: 20px;
    h2 {
      margin-bottom: 25px;
    }
  }
  .gridArea {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    width: 90%;
    height: 80%;
    h2 {
      text-align: center;
    }
  }

  @media (max-width: 421px) {
    .gridArea {
      grid-template-columns: 1fr;

      div {
        text-align: center;
      }
    }
  }
`;
