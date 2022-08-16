import styled from "styled-components";

export const Container = styled.div`
  margin: 30px 0px;
  cursor: pointe;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
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
`;
