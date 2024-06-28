import React from "react";
import MainSearchPage from "./components/MainSearchPage/MainSearchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainSearchPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
