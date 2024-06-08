import { Link } from "react-router-dom"

const Section = ({ articles }) => {
  return (
    <div>
        {articles.length > 0 && articles.map(article =>
            <li key={article.guid}>
                <Link to={article.link} target="_blank">{article.title}</Link>
                <p>{article.description}</p>
            </li>)}
    </div>
  )
}

export default Section  