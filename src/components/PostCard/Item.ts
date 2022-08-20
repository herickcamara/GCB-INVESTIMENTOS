import styled from "styled-components";

export default styled.div`
  max-width: 279px;
  width: 279px;
  overflow: hidden;
  max-height: 426px;
  height: 425px;
  margin: 10px 10px;

  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 20%) 0px 4px 8px 0px,
    rgb(0 0 0 / 19%) 0px 6px 20px 0px;
  img {
    max-width: 279px;

    max-height: 226px;
  }
  .container {
    height: 200px;
    display: flex;
    padding: 0px 22.5px;
    justify-content: space-evenly;
    flex-direction: column;
    h2 {
      font-size: 1.25rem;
      font-weight: bolder;

      margin: 23px 0px 15px;
    }

    img {
      width: 52px;
      height: 52px;
      border-radius: 50%;

      margin-right: 0.5rem;
    }
    .userArea {
      display: flex;
      align-items: center;
      margin-bottom: 5px;

      span {
        font-size: 1rem;
        color: #b3b1c1;
      }
    }
  }
  @media (max-width: 278px) {
    width: 98vw;
    padding: 3px;
    img {
      width: 100%;
    }
    .container {
      padding: 0px;
      width: 100%;
      .userArea {
        flex: 1;
        justify-content: center;
        flex-direction: column;
      }
    }
  }
`;
