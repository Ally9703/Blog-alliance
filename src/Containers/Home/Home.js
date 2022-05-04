// Librairies
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../config/axios-firebase';
import routes from '../../config/routes';

// Composant
import DisplayedArticles from '../../Components/DisplayedArticles/DisplayedArticles';
import classes from './Home.module.css';

function Home() {

    // State
    const [articles, setArticles] = useState([]);

    // ComponentDidMount
    useEffect(() => {

        axios.get('/articles.json')
            .then(response => {
                
                let articlesArray = [];

                for (let key in response.data) {
                    articlesArray.push({
                        ...response.data[key],
                        id: key
                    });
                }

                // Chronologie
                articlesArray.reverse();

                // Trier
                articlesArray = articlesArray.filter(article => article.brouillon == "false");

                // Limiter à 3
                articlesArray = articlesArray.slice(0, 3);

                setArticles(articlesArray);

            })
            .catch(error => {
                console.log(error);
            });

    }, []);

    return (
        <>
            <h1>Accueil</h1>

            <DisplayedArticles articles={articles} />

            <div className="container">
                <div className={classes.mainLink}>
                    <Link to={routes.ARTICLES}>
                        Voir les articles &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Home;