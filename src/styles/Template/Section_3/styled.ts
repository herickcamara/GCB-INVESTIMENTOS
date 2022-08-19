import styled from "styled-components";

export const Container = styled.div`
  width: 389px;
  height: 723px;
  position: relative;
  right: 0px;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0px 10px;
  h2 {
    font-size: 2rem;
  }
  p {
    margin: 5px 0px;
  }
  @media (max-width: 900px) {
    width: 425px;
  }
  @media (max-width: 470px) {
    width: 100%;
  }
`;
