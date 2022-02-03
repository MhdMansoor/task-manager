import React from "react";
import ReactDOM from "react-dom";
import RouterComponent from "./routes";
import LanguageContextProvider from "./contexts/LanguageContext";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <>
    <Provider store={store}>
      <LanguageContextProvider>
        <RouterComponent />
      </LanguageContextProvider>
    </Provider>
  </>,
  document.getElementById("root")
);
