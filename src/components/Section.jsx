import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { getNYTArticles } from "./fetch";
const sectionsJSON = require('../data/NYT-sections.json');

const Section = () => {
    const [articles, setArticles] = useState([]);
    const { id } = useParams();
    const sectionsArr = Array.from(sectionsJSON);

    useEffect(() => {
        getNYTArticles(sectionsArr[id]).then((arts) => {
            setArticles(arts);
        }).catch((err) => console.error(err));
    }, []);

    return (
        <div>
            {articles.length > 0 && articles.map(article =>
                <li key={article.guid}>
                    <Link to={article.link} target="_blank">{article.title}</Link>
                    <p>{article.description}</p>
                    <p>{article['media:description']}</p>
                </li>)}
        </div>
    )
}

export default Section  