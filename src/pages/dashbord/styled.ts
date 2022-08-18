import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const SubContainer = styled.div`
  width: 500px;
  margin: auto;
  @media (max-width: 500px) {
    width: 90%;
    h2 {
      text-align: center;
    }
  }
`;
