import styled from "styled-components";

export const Containe = styled.div<{ img?: string }>`
  color: #fff;
  min-height: 100vh;
  padding: 0px 10px;
  background: ${(props) => `url(${props.img})` ?? ""} no-repeat;
  background-size: 25%;
  background-position: left bottom;
  background-color: var(--bg-color);
  h1 {
    display: inline-block;
    padding: 10px 0px;
    display: flex;
    align-items: center;
    color: var(--color-h1);
    cursor: pointer;
  }

  .container {
    padding: 26px 0;
    border-bottom: 1px solid #16195c;

    h2 {
      font-size: 28px;
      color: var(--color-h2);
    }

    p {
      font-size: 18px;
      color: var(--color-p);
    }
  }
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Steps = styled.div`
  flex: 1;
  display: flex;
`;

export const Sidebar = styled.div`
  width: 250px;
  border-right: 1px solid #16195c;
`;

export const Page = styled.div`
  flex: 1;
  padding-left: 40px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
`;
