// Librairie
import React from 'react';
import classes from './Layout.module.css';

// Composant
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

function Layout(props) {
    return (
        <div className={classes.Layout}>
            <Header user={props.user} />

            <div className={classes.content}>
                {props.children}
            </div>

            <Footer />
        </div>
    );
}

/*
    - Header
        - logo
        - Navigation
            - NavigationItem
*/

export default Layout;