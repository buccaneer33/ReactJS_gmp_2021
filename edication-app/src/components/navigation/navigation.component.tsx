import React from 'react';
import {useStyles} from './styles';
import {SortByComponent} from '../sortBy/sortBy.component';

const movies = ['all', 'documentary', 'comedy', 'horror', 'crime']

export const NavigationComponent: React.FC = () => {

    const classes = useStyles();

    return (
        <div className={classes.nav}>
            <ul className={classes.menu}>{
                movies.map((value, index) => <li className={classes.item} key={index}>
                    <a className={classes.link} href="#44">{value}</a>
                </li>)
            }</ul>
            <SortByComponent />
        </div>
    );
}
