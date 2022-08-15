import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    
    a{
      color:#f5f5f5;
      text-decoration:none;
    }
    ul{
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      list-style-type: none;
    }
  }

`
