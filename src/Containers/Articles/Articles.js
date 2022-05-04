// Librairies
import React, { useState, useEffect } from 'react';
import axios from '../../config/axios-firebase';

// Composant
import DisplayedArticles from '../../Components/DisplayedArticles/DisplayedArticles';

function Articles() {

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

                setArticles(articlesArray);

            })
            .catch(error => {
                console.log(error);
            });

    }, []);

    return (
        <>
            <h1>Articles</h1>
            <DisplayedArticles articles={articles} />
        </>
    );
}

export default Articles;