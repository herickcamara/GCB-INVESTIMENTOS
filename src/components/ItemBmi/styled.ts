import styled from "styled-components";

export const Container = styled.div<{ bg: string }>`
  background: ${(props) => props.bg};
  border-radius: 10px;
  display: flex;
  align-items: center;
  min-height: 172px;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 5px;
  color: #fff;
  h3 {
    font-size: 1.43rem;
    color: #fff;
  }
`;
