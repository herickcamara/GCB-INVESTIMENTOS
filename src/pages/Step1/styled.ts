import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  h2 {
    font-size: 28px;
    color: #f5f5f5;
  }

  font-size: 18px;
  color: var(--color-p);
  hr {
    height: 2px;
    border: none;
    background-color: var(--color-h2);
  }

  form .gridArea {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6px;
    margin-bottom: 10px;
    label {
      input {
        margin-top: 7px;
        display: block;
      }
      input[type="date"] {
        width: 100%;
      }
    }
    @media (max-width: 480px) {
      grid-template-columns: 1fr;
      width: 200px;
      margin: auto;
    }

    @media (max-width: 270px) {
      width: 90%;
      div {
        width: 96%;

        input {
          width: 100%;
        }
        input[type="date"] {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 721px) {
    padding: 0px;
    width: 90%;
    margin: auto;
    margin-top: 10px;
  }
  @media (max-width: 480px) {
    from {
      width: 200px;
      margin: auto;
    }
    h2 {
      font-size: 20px;
      text-align: center;
    }
    p {
      font-size: 15px;
      text-align: center;
      margin-top: 10px;
    }
    button {
      margin: auto;
    }
  }

  @media (max-width: 270px) {
    form {
      width: 98%;
    }
    label {
      input {
        width: 80%;
      }
      input[type="date"] {
        width: 80%;
      }
    }
  }
`;
