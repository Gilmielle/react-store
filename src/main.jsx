import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { initialState, rootReducer } from "./store/reducer.js";
import { QueryClientProvider, QueryClient } from "react-query";

const store = createStore(rootReducer, initialState);

const provider = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <QueryClientProvider client={provider}>
          <Suspense fallback={<div>Загрузка...</div>}>
            <App />
          </Suspense>
        </QueryClientProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
