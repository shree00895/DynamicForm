import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import DynamicForm from "./components/Form/DynamicForm.tsx";
import CustomThemeProvider from "./customThemeProvider/CustomThemeProvider.tsx";
import JSONCollector from "./components/JSONCollector/JSONCollector.tsx";
import store from "./store/createStore.ts";

import "./App.css";

function App() {
  // Added custom theme provider to have the dark and light mode
  return (
    <div className="App">
      <CustomThemeProvider>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<JSONCollector />} />
              <Route path="/dynamic-form" element={<DynamicForm />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </CustomThemeProvider>
    </div>
  );
}

export default App;
