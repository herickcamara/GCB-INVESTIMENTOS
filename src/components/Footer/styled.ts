import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;

  padding: 20px 40px;
  display: flex;
  background-color: #f5f5f5;
  align-item: center;
  justify-content: space-between;
  div {
    display: flex;
    align-item: center;
    justify-content: space-around;
  }
  p {
    color: #888;
    font-size: 1.2rem;
  }
  span {
    color: #1d164d;
    font-size: 1.2rem;
    font-weight: 500;
  }
  @media (max-width: 868px) {
    flex-direction: column;
    p {
      text-align: center;
      margin-bottom: 20px;
    }
  }
`
