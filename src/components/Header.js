import React, { useState } from "react";
import Navigation from './Navigation';
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from './Resume';

export default function Header() {
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case "About": 
                return <About/>;
            case "Portfolio":
                return <Portfolio/>;
            case "Contact":
                return <Contact/>;
            case "Resume":
                return <Resume/>;

            default:
                return <About/>;


        }
    };

    return (
        <header className="header">
            <h1 className="title is-1 ">Seth William Leininger</h1>
            {/* <nav className="navbar">
                <div>
                    <a
                    className="navbar-item"
                    rel="noreferrer"
                    href="https://github.com/sethleininger?tab=repositories"
                    >
                    </a>
                </div>
            </nav> */}
            <Navigation
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            />
            <main>
                <div>{renderPage(currentPage)}</div>
            </main>
        </header>
    );
}