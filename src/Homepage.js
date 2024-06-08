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
            {console.log(articles)}
            <h1>HomePage</h1>
            {articles.length > 0 && articles.map(article => <li key={article.guid}>
                <Section article={article} />                
            </li>)}
        </div>
    )
}


export default Homepage;
