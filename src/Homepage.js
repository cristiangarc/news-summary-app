import { useState, useEffect } from "react";
import { getNYTArticles } from "./components/fetch";
import Section from "./components/Section";
import { Link } from "react-router-dom";

const sections = require("./data/NYT-sections.json");

function Homepage () {
    return (
        <div>
            <h1>HomePage</h1>
            {sections.map((section) =>
                <section key={section}>
                    <Link to={`/sections/${sections.indexOf(section)}`} className="section-link">{section}</Link>
                </section>)}
        </div>
    )
}


export default Homepage;
