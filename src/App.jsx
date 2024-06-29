import React from "react";
import MainSearchPage from "./components/MainSearchPage/MainSearchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResultsPage from "./components/SearchResultsPage/SearchResultsPage";
import LearnMorePage from "./components/LearnMorePage/LearnMorePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainSearchPage />} />
          <Route path="/search-results" element={ <SearchResultsPage /> } />
          <Route path="/learn-more" element={ <LearnMorePage /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
