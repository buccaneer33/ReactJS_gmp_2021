import React from 'react';
import {stylesList} from './styles';

const selectList = [{id: 1, title: 'release date'}, {id: 2, title: 'genre'}, {id: 3, title: 'title'}];

export const SortByComponent: React.FC = () => {
    const classes = stylesList();
    return (
        <div className={classes.sortBlock}>
            <span className={classes.title}>sort by</span>
            <select>
                {selectList.map((value) => <option key={value.id}>{value.title}</option>)}
            </select>
        </div>
    );
}
