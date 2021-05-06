import React, {Fragment, useState} from 'react';
import styles from './styles.css';
import {NavLink} from "react-router-dom";

export const MovieSearchComponent = () => {

    const [search, setSearch] = useState('');

    return (<Fragment>
        <h1 class={styles.title}>find your movie</h1>
        <div class={styles.search}>
            <input
                type="text"
                class={styles.searchInput}
                placeholder="What do you want to watch?"
                onBlur={(value => setSearch(value.target.value))}
            />
            <NavLink to={`/search/${search}`} class={styles.button}>search</NavLink>
        </div>
    </Fragment>)
}
