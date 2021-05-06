import React, {useState} from 'react';
import styles from './styles.css';

import {LogoComponent} from '../logo/logo.component';
import {MovieSearchComponent} from '../movieSearch/movieSearch.component';

export const HeaderComponent = () => {

    const [modalState, setState] = useState(false);

    return (
        <div class={styles.header}>
            <div class={styles.headerUpper}>
                <LogoComponent />
                <button class={styles.button} onClick={() => setState(true)}>+Add Movie</button>
            </div>
            <div class={styles.headerMain}>
                <MovieSearchComponent />
            </div>
            
        </div>
    );
}
