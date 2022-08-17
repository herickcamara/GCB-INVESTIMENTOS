import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  text-align: center;
  h2 {
    font-size: 30px;
    color: var(--color-h2);
  }
  p {
    color: #888;
    font-size: 20px;
    margin: 5px 0px;
  }
`;
export const ContainerScroll = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .scrollBar {
    width: 90%;
    padding: 10px;
    overflow: hidden;
    height: 400px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .areaArrowLeft {
      width: 70px;
      height: 100%;
      left: 0;
      position: absolute;
      background: linear-gradient(
        to right,
        rgba(204, 204, 204, 0.5),
        transparent
      );
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        cursor: pointer;
        width: 45px;
        height: 50px;
        background-color: #f5f5f5;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        color: var(--bg-button);
        font-size: 25px;
        border: none;
      }
    }

    .areaArrowRight {
      width: 70px;
      height: 100%;
      right: 0;
      position: absolute;
      background: linear-gradient(
        to left,
        rgba(204, 204, 204, 0.5),
        transparent
      );
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        cursor: pointer;
        width: 45px;
        height: 50px;
        background-color: #f5f5f5;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        color: var(--bg-button);
        font-size: 25px;
        border: none;
      }
    }
    @media (max-width: 721px) {
      .areaArrowRight,
      .areaArrowLeft {
        display: none !important;
      }
    }
    .scroll {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0px 40px;
      overflow-x: scroll;
      scroll-behavior: smooth;
      ::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;
