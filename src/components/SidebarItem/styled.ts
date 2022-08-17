import styled from "styled-components";

export const Container = styled.div`
  margin: 30px 0px;
  cursor: pointe;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  @media (max-width: 721px) {
    margin: 10px;

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
export const Infor = styled.div`
  flex: 1;
  margin-right: 20px;

  h2 {
    text-align: right;
    font-weight: bold;
    margin-bottom: 5px;
    color: #f5f5f5;
  }

  p {
    text-align: right;
    color: var(--color-p);
  }

  @media (max-width: 721px) {
    margin: 0px;
    margin-bottom: 20px;
    h2,
    p {
      font-size: 90%;
      text-align: center;
    }
  }

  @media (max-width: 600px) {
    p {
      font-size: 10px;
    }
  }

  @media (max-width: 480px) {
    p {
      display: none;
    }
  }

  @media (max-width: 321px) {
    margin: 0px;
    h2 {
      display: none;
    }
  }
`;
export const IconArea = styled.div<{ active: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? "var(--bg-color)" : "#f5f5f5"};
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-h2);
  @media (max-width: 721px) {
    margin-bottom: -25px;
    width: 33px;
    height: 33px;
  }
  @media (max-width: 321px) {
    margin-bottom: -25px;
    width: 20px;
    height: 20px;
  }
`;
export const Point = styled.div<{ active: boolean }>`
  width: 15px;
  height: 15px;
  border: 3px solid var(--color-h2);
  border-radius: 50px;
  margin-left: 20px;
  margin-right: -9px;
  background-color: ${(props) =>
    props.active ? "var(--bg-color)" : "#f5f5f5"};

  @media (max-width: 721px) {
    display: none;
  }
`;
