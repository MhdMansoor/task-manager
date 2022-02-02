import React from "react";
import ReactDOM from "react-dom";
import RouterComponent from "./routes";
import LanguageContextProvider from "./contexts/LanguageContext";

ReactDOM.render(
  <>
    <LanguageContextProvider>
      <RouterComponent />
    </LanguageContextProvider>
  </>,
  document.getElementById("root")
);
