import React from 'react';
import {useStyles} from './styles';
import {SortByComponent} from '../sortBy/sortBy.component';

const {classes} = useStyles.attach();

export class NavigationComponent extends React.Component {
    movies = ['all', 'documentary', 'comedy', 'horror', 'crime']
    render (): JSX.Element {
        return (
            <div className={classes.nav}>
                <ul className={classes.menu}>{
                    this.movies.map((value, index) => <li className={classes.item} key={index}>
                        <a className={classes.link} href="#44">{value}</a>
                    </li>)
                }</ul>
                <SortByComponent />
            </div>
        );
    }
}
