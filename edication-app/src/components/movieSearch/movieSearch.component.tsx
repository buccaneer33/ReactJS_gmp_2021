import React, {useState} from 'react';
import {useStyles} from './styles';
import {NavLink} from "react-router-dom";

export const MovieSearchComponent: React.FC = () => {
    const classes = useStyles();

    const [search, setSearch] = useState('');

    return (<>
        <h1 className={classes.title}>find your movie</h1>
        <div className={classes.search}>
            <input
                type="text"
                className={classes.searchInput}
                placeholder="What do you want to watch?"
                onBlur={(value => setSearch(value.target.value))}
            />
            <NavLink to={`/search/${search}`} className={classes.button}>search</NavLink>
        </div>
    </>)
}
