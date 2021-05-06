import React from 'react';
import styles from './styles.css';
import {LogoComponent} from '../logo/logo.component';

export const FooterComponent = () => {
    return (
        <div class={styles.footer}>
            <LogoComponent />
        </div>
    );
}
