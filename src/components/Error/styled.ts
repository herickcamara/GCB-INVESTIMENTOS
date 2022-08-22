import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  .infor {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #f5f5f5;
    max-width: 500px;
    width: 90%;
    box-shadow: 2px 5px 10px #888;

    border-radius: 8px;
    h1 {
      margin-bottom: 10px;
      font-size: 2.75rem;

      color: #ff0000;
    }
    h2 {
      font-size: 2rem;
    }
    .AreaButton {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: end;
      padding: 20px;
    }
  }
`;
