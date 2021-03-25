import React, {useState, useEffect} from 'react';
import {useStyles} from './styles';
import {useDispatch} from 'react-redux';
import { sortMovies } from '../../store/actions/sortMovies';

const selectList = [{id: 1, title: 'release_date'}, {id: 2, title: 'genres'}, {id: 3, title: 'title'}];

export const SortByComponent: React.FC = () => {
    const classes = useStyles();

    const [filterState, setFilter] = useState();

    const change = (event) => {setFilter(event.target.value)}

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(sortMovies(filterState));
    }, [filterState, dispatch])

    return (
        <div className={classes.sortBlock}>
            <span className={classes.title}>sort by</span>
            <select onChange={change}>
                {selectList.map((value) => <option key={value.id}>{value.title}</option>)}
            </select>
        </div>
    );
}
