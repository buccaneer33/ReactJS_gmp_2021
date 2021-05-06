import React, {useState} from 'react';
import styles from './styles.css';

export const MoviesCounterComponent = ({moviesCount}) => {
    const [count] = useState(moviesCount);

    return (<div class={styles.block}>{count}<span> movies found</span></div>);
}
