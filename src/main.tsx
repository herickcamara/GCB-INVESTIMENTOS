import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GlobalStyle } from "./styledGlobal";
import { ContexProvider } from "./Context/FormContext ";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ContexProvider>
      <App />
    </ContexProvider>
    <GlobalStyle />
  </React.StrictMode>
);
