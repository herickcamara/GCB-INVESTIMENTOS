import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: end;
`;
export const Drop = styled.div`
  width: 30px;
  cursor: pointer;
  height: 30px;
  display: none;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
export const Ul = styled.ul<{ action?: boolean }>`
  flex: 1;
  height: 40px;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-evenly;
  list-style-type: none;
  li {
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
    padding: 10px;

    a {
      color: var(--color-h1);
    }
  }
  @media (max-width: 768px) {
    display: ${(props) => (props.action ? "block" : "none")};
    position: absolute;
    width: 40%;
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
      background-color: #f5f5f5;
      padding: 10px;

      a {
        color: var(--color-h2);
      }
    }
  }
  @media (max-width: 321px) {
    font-size: 13px;
    width: 70%;
  }
`;
