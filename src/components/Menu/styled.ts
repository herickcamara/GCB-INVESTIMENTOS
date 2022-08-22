import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: end;
`;
export const DropsMenu = styled.div`
  width: 30px;
  cursor: pointer;
  height: 30px;
  display: none;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
  }

  @media (max-width: 840px) {
    display: flex;
  }
`;
export const Ul = styled.ul<{ active?: boolean }>`
  height: 40px;
  display: flex;
  min-width: 388px;
  padding: 10px;
  align-items: center;
  justify-content: space-evenly;
  list-style-type: none;

  li {
    padding: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: 3px;
  }

  a {
    font-weight: bold;
  }

  .register {
    background-color: #f5f5f5;
    padding: 20px;

    a {
      color: var(--color-h1);
    }
  }
  @media (max-width: 840px) {
    display: ${(props) => (props.active ? "block" : "none")};
    position: absolute;

    top: 70px;
    text-align: center;
    height: auto;
    background-color: var(--color-h2);
    right: 0;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    li {
      padding: 20px;
      margin: 20px 0px;
      display: block;
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    a {
      color: #fff;
    }

    .register {
      background-color: #fff;
      padding: 10px;

      a {
        color: var(--color-h2);
      }
    }
  }
  @media (max-width: 440px) {
    min-width: 70%;
  }
  @media (max-width: 321px) {
    font-size: 13px;
    min-width: 70%;
  }
`;
