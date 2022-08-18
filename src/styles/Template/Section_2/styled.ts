import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  text-align: center;
  h2 {
    font-size: 2rem;
    margin: 30px 0px;
    color: var(--color-h2);
  }
`;
export const GridArea = styled.div`
  height: auto;
  padding: 20px 10px;
  display: flex;
  justifu-content: center;
`;
export const Grid = styled.section`
  width: 100%;
  align-items: center;
  padding: 10px;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    justify-content: center;
    width: 100%;
    margin: auto;
    gap: 40px;
    padding: 20px;
  }
`;
