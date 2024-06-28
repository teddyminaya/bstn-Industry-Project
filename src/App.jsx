import React from "react";
import MainSearchPage from "./components/MainSearchPage/MainSearchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResultsPage from "./components/SearchResultsPage/SearchResultsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainSearchPage />} />
          <Route path="/search-results" element={ <SearchResultsPage /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
