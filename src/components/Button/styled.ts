import styled from "styled-components";

export const Button = styled.button<{ bg?: string; pd?: string }>`
  font-size: 16px;
  padding: ${(props) => (props.pd ? props.pd : "10px")};
  background-color: var(${(props) => props.bg ?? "--bg-button"});
  outline: none;
  border: none;
  max-width: 112px;
  border-radius: 5px;
  color: #f5f5f5;
  cursor: pointer;
  img {
    width: 20px;
  }

  &:hover {
    opacity: 0.7;
  }
`;
