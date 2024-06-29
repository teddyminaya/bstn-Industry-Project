import "./SearchResultsPage.scss";
import { Link } from "react-router-dom";
import * as React from 'react';
import SearchResultsModal from "../SearchResultsModal/SearchResultsModal";

const SearchResultsPage = () => {
    return (
        <>
            <div className="container">
                <SearchResultsModal />
                <Link to={'/learn-more'}><button className="more-info">Learn more about generative AI</button></Link>
            </div>
        </>
    )
};

export default SearchResultsPage;