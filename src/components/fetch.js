// const API_KEY = import.meta.env.VITE_API_KEY;

export function getNYTArticles (section) {
    return fetch(`https://rss.nytimes.com/services/xml/rss/nyt/${section}.xml`)
    //    .then(response => response.json())
       .then(data => console.log(data));
}