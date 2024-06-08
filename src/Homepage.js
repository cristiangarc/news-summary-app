import { useState, useEffect } from "react";
import { getNYTArticles } from "./components/fetch";
import { Link } from "react-router-dom";
import Section from "./components/Section";

function Homepage () {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getNYTArticles('HomePage').then((arts) => {
            setArticles(arts);
        }).catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h1>HomePage</h1>
            <Section articles={articles} />                
        </div>
    )
}


export default Homepage;
