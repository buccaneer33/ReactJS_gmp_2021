import React, {useState, useEffect} from 'react';
import styles from './styles.css';
import {useDispatch} from 'react-redux';
// import { getMovies } from '../../store/actions/getMovies';

const selectList = [{id: 1, title: 'release_date'}, {id: 2, title: 'genres'}, {id: 3, title: 'title'}];

export const SortByComponent = () => {

    const [filterState, setFilter] = useState();

    const change = (event) => event.target.value && setFilter(event.target.value)

    const dispatch = useDispatch();

    /*useEffect(() => {
        filterState && dispatch(getMovies([{param: 'sortBy', value: filterState}]));
    }, [filterState, dispatch])*/

    return (
        <div class={styles.sortBlock}>
            <span class={styles.title}>sort by</span>
            <select onChange={change}>
                {selectList.map((value) => <option key={value.id}>{value.title}</option>)}
            </select>
        </div>
    );
}
