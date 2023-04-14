import React from "react";
import BaseHeader from "./components/BaseHeader.jsx";
import BaseFooter from "./components/BaseFooter.jsx";
import MainPage from "./pages/MainPage.jsx";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import "./styles/style.min.css";
import "./styles/custom.css";

function App() {
  return (
    <>
      <BaseHeader />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <BaseFooter />
    </>
  );
}

export default App;
