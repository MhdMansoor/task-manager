import React from "react";
import ReactDOM from "react-dom";
import RouterComponent from "./routes";
import LanguageContextProvider from "./contexts/LanguageContext";
import { Provider } from "react-redux";
import store from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
let persistor = persistStore(store);
ReactDOM.render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LanguageContextProvider>
          <RouterComponent />
        </LanguageContextProvider>
      </PersistGate>
    </Provider>
  </>,
  document.getElementById("root")
);
