import React from 'react';
import {stylesList} from './styles';
import {SortByComponent} from '../sortBy/sortBy.component';

const {classes} = stylesList.attach();
const movies = ['all', 'documentary', 'comedy', 'horror', 'crime']

export class NavigationComponent extends React.Component {
    
    render (): JSX.Element {
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
}
