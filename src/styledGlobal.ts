import { createGlobalStyle } from "styled-components";

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

    h2 {
      font-size: 2.75rem;
      color: var(--color-h2);
    }
h3{
 color :#554d7f;
}
    p {
      color: var(--color-p);
      font-size: 1.25rem;
      margin: 5px 0px;
    }

    
    @media (max-width: 321px) {
      h2 {
        font-size: 1.56rem;
      }
    }
  }

`;
