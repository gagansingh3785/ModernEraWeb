import React from "react";
import "./home.css";
import Social from "./Social"
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home_container container grid">
                <div className="home_content grid">
                    <Social />

                    {/* <div className="home_img"></div> */}
                    <div className="home_logo_container">
                        <h1 className="home_logo">
                            <span>M</span>
                            <span>O</span>
                            <span>D</span>
                            <span>E</span>
                            <span>R</span>
                            <span>N</span>
                            <span>E</span>
                            <span>R</span>
                            <span>A </span>
                            <span>W</span>
                            <span>E</span>
                            <span>B</span>
                        </h1>
                    </div>

                    <Data />
                </div>
                <ScrollDown />
            </div>
        </section>
    )
}

export default Home