import styled from "styled-components";

export const Container = styled.div`
  max-width: 484px;
  min-width: 200px;
  width: 100%;
  display: flex;
  overflow: hidden;
  margin: auto;
  border-radius: 8px;
  align-items: center;
  box-shadow: 2px 5px 10px #888;
  div {
    flex: 1;
    display: flex;
    justify-content: center;
    padding: 10px;
    flex-direction: column;
    h3 {
      font-size: 25px;
      margin-bottom: 20px;
      color: var(--color-h2);
    }
  }
  .imgArea {
    padding: 0;
    min-width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    img {
      flex: 1;
    }
  }
  @media (max-width: 430px) {
    flex-direction: column;
    min-width: 141px;
    width: 83%;
  }
`;
