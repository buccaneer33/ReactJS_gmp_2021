import React, {useEffect, useState} from 'react';
import {useStyles} from './styles';
import {SortByComponent} from '../sortBy/sortBy.component';
import {useDispatch} from "react-redux";
import {getMovies} from '../../store/actions/getMovies';

const ganres = ['all', 'Comedy', 'Drama', 'Romance', 'Action', 'Adventure', 'Fantasy']

export const NavigationComponent: React.FC = () => {

    const classes = useStyles();

    const [currentGanre, setGanre] = useState<string>();

    const dispatch = useDispatch();

    useEffect(() => {
        if (currentGanre === 'all') {
            dispatch(getMovies([]));
        } else if (currentGanre !== 'all' && ganres.includes(currentGanre)) {
            dispatch(getMovies([{param: 'filter', value: currentGanre}]));
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
