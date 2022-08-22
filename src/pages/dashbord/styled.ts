import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const SubContainer = styled.div`
  width: 500px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-shadow: 2px 5px 10px #888;

  margin: auto;
  @media (max-width: 500px) {
    width: 90%;
    h2 {
      text-align: center;
    }
  }
`;
