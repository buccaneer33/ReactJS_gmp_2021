import React, {useEffect, useState} from 'react';
import {useStyles} from './styles';
import {SortByComponent} from '../sortBy/sortBy.component';
import {useDispatch} from "react-redux";
import {fetchMovies} from '../../store/actions/fetchMovies';
import {filterMovies} from '../../store/actions/filterMovies';

const ganres = ['all', 'Comedy', 'Drama', 'Romance', 'Action', 'Adventure', 'Fantasy']

export const NavigationComponent: React.FC = () => {

    const classes = useStyles();

    const [currentGanre, setGanre] = useState<string>();

    const dispatch = useDispatch();

    useEffect(() => {
        if (currentGanre === 'all') {
            dispatch(fetchMovies());
        } else if (currentGanre !== 'all' && ganres.includes(currentGanre)) {
            dispatch(filterMovies('genres', currentGanre));
        }
    }, [currentGanre, dispatch])

    return (
        <div className={classes.nav}>
            <ul className={classes.menu}>{
                (ganres && ganres.length) &&
                ganres.map((value, index) => <li className={classes.item} key={index}>
                    <button onClick={() => setGanre(value)} className={classes.link}>{value}</button>
                </li>)
            }</ul>
            <SortByComponent />
        </div>
    );
}
