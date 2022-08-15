import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  right: 0px;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0px 10px;
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
