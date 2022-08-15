import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  text-align: center;
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
`;
