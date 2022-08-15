import styled from "styled-components";



export const Container = styled.div`
min-width:200px;
max-height:200px;
display:flex;
overflow: hidden;
border-radius:8px;
align-items:center;
box-shadow: 2px 5px 10px #888;
div{
  flex:1;
  display:flex;
  justify-content:center;
  padding:10px;
  flex-direction:column;
  h3{
    font-size:25px;
    margin-bottom:20px; 
    color: var(--color-h2)

  }
}
.imgArea{
  padding:0;
  min-width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    flex: 1;
  }
}
`