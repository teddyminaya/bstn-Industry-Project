
import "./SearchResultsPage.scss";
import * as React from 'react';
import SearchResultsModal from "../SearchResultsModal/SearchResultsModal";

const SearchResultsPage = () => {
    return (
        <>
            <div className="container">
                <SearchResultsModal />
            </div>
        </>
    )
};

export default SearchResultsPage;