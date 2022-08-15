import styled from "styled-components";


export const Container = styled.ul`
flex:1;
height: 35px;
display: flex;
align-items: center;
justify-content: space-evenly;
list-style-type: none;
li{
  height:100%;
  display: flex;
  align-items: center;
  border-radius:3px;
}
.register{
  background-color:#f5f5f5;
  padding:10px;

  a{
    color:var(--color-h1)
  }
}
`