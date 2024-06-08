import { useState, useEffect } from "react";
import { getNYTArticles } from "./components/fetch";
import { Link } from "react-router-dom";

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
                <Link to={article.link} target="_blank">{article.title}</Link>
                <p>{article.description}</p>
            </li>)}
        </div>
    )
}


export default Homepage;
