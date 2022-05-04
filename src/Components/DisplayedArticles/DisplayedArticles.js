// Librairies
import React from 'react';
import DisplayedArticle from './DisplayedArticle/DisplayedArticle';
import classes from './DisplayedArticles.module.css';

function DisplayedArticles(props) {

    let articles = props.articles.map(article => (
        <DisplayedArticle key={article.id} article={article} />
    ));

    return (
        <section className={[classes.DisplayedArticles, 'container'].join(' ')}>
            {articles}
        </section>
    );
}

export default DisplayedArticles;