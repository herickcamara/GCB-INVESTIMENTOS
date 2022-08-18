import styled from "styled-components";

export const Containe = styled.div<{ img?: string }>`
  color: #fff;
  min-height: 100vh;
  padding: 0px 10px;
  background: ${(props) => `url(${props.img})` ?? ""} no-repeat;
  background-size: 25%;
  background-position: left bottom;
  background-color: var(--color-h2);

  .container {
    padding: 26px 0;
    border-bottom: 1px solid var(--color-p);

    h2 {
      font-size: 28px;
      color: #f5f5f5;
    }

    p {
      font-size: 18px;
      color: var(--color-p);
    }
    @media (max-width: 480px) {
      h2 {
        font-size: 20px;
      }

      p {
        font-size: 15px;
      }
    }
  }

  @media (max-width: 480px) {
    h1 {
      width: inherit;
      font-size: 25px;
    }
  }
  @media (max-width: 270px) {
    h1 {
      font-size: 20px;
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
  @media (max-width: 721px) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.div`
  width: 250px;
  border-right: 1px solid var(--color-p);
  @media (max-width: 721px) {
    max-height: 96px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    padding: 0 10px;
    border: none;
    border-bottom: 1px solid var(--color-p);
  }
  @media (max-width: 321px) {
    border: none;
  }
`;

export const Page = styled.div`
  flex: 1;
  padding-left: 40px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  @media (max-width: 721px) {
    padding: 0px;

    margin-top: 10px;
  }
  @media (max-width: 480px) {
    margin: 0px;
    margin-top: 10px;
    grid-template-columns: 1fr;
  }
`;
