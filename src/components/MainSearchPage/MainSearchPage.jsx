import React from "react";
import "./MainSearchPage.scss";

const MainSearchPage = () => {
    return (
        <div>
            <header>
                <ul>
                    <li>
                        <a className="links" href="#user">
                            <button className="signbutton" type="button">
                                Sign in
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href="#grid">
                            <img
                                className="grid"
                                src="https://cdn3.iconfinder.com/data/icons/navigation-and-settings/24/Material_icons-01-11-512.png"
                                alt="Google apps"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#images">Images</a>
                    </li>
                    <li>
                        <a href="#gmail">Gmail</a>
                    </li>
                    <div className="nav-container-left">
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Store</a>
                    </li>
                    </div>
                </ul>
            </header>
            <section className="search-container">
                <div className="logo">
                    <img
                        alt="Google"
                        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                    />
                </div>
                <div className="bar">
                    <input className="searchbar" type="text" title="Search" />
                    <a href="#">
                        <img
                            className="voice"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/716px-Google_mic.svg.png"
                            alt="Search by Voice"
                        />
                    </a>
                </div>
                <div className="buttons">
                    <button className="button" type="button">
                        Google Search
                    </button>
                    <button className="button" type="button">
                        I'm Feeling Lucky
                    </button>
                    <button className="button" type="button">
                        <p className='gemini-text'>Gemini</p>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default MainSearchPage;

