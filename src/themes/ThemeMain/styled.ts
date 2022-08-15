import styled from "styled-components";

export const Container = styled.div<{
  img?: string;
  pos?: string;
  img2?: string;
}>`
  max-width: 1440px;
  width: 100%;
  height: 100vh;
  margin: auto;
  padding-bottom: 20px;
  box-sizing: content-box;
  background: ${(props) => (props.img ? `url(${props.img})` : "#f5f5f5")}
    no-repeat;
  background-size: 843px;
  background-position: ${(props) => props.pos ?? "left top"};
  .subContainer {
    max-width: 900px;
    height: inherit;
    margin: auto;
  }

  @media (max-width: 980px) {
    background: ${(props) =>
        props.img2 ? `url(${props.img2})` : `url(${props.img})`}
      no-repeat;

    background-size: ${(props) => (props.img2 ? "40%" : "83%")};

    background-position: ${(props) =>
      props.img2 ? "left bottom" : "right bottom"};

    background-color: ${(props) => (props.img ? "var(--bg-color)" : "#f5f5f5")};
  }
`;
