// Librairies
import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.css';

function NavigationItem(props) {
    return (
        <li className={classes.NavigationItem}>
            <NavLink exact={props.exact} to={props.to} activeClassName={classes.active}>{props.children}</NavLink>
        </li>
    );
}

export default NavigationItem;