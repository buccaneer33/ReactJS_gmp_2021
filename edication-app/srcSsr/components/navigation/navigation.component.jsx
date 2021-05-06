import React, {useEffect, useState} from 'react';
import styles from './styles.css';
import {SortByComponent} from '../sortBy/sortBy.component';
import {useDispatch} from "react-redux";
// import {getMovies} from '../../store/actions/getMovies';

const ganres = ['all', 'Comedy', 'Drama', 'Romance', 'Action', 'Adventure', 'Fantasy']

export const NavigationComponent = () => {

    const [currentGanre, setGanre] = useState();

    const dispatch = useDispatch();

    useEffect(() => {
        if (currentGanre === 'all') {
            // dispatch(getMovies([]));
        } else if (currentGanre !== 'all' && ganres.includes(currentGanre)) {
            // dispatch(getMovies([{param: 'filter', value: currentGanre}]));
        }
    }, [currentGanre, dispatch])

    return (
        <div class={styles.nav}>
            <ul class={styles.menu}>{
                (ganres && ganres.length) &&
                ganres.map((value, index) => <li class={styles.item} key={index}>
                    <button onClick={() => setGanre(value)} class={styles.link}>{value}</button>
                </li>)
            }</ul>
            <SortByComponent />
        </div>
    );
}
