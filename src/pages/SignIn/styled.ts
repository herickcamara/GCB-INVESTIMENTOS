import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  h2 {
    font-size: 28px;
    color: var(--color-h2);
  }
  .form {
    display: grid;
    gap: 10px;
  }
`;
