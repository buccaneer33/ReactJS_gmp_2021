import React from 'react';
import {useStyles} from './styles';

export const SortByComponent = (): JSX.Element => {
    const classes = useStyles();
    const selectList = ['release date', 'genre', 'title'];
    return (
        <div className={classes.sortBlock}>
            <span className={classes.title}>sort by</span>
            <select>
                {selectList.map((value, index) => <option key={index}>{value}</option>)}
            </select>
        </div>
    );
}
