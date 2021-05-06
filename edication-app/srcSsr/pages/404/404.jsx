import React from 'react';
import styles from './styles.css';
import {Link} from "react-router-dom";
import {FooterComponent} from '../../components/footer/footer.component';
import {LogoComponent} from '../../components/logo/logo.component';

export const Page404Component = () => {

    return (
        <div class={styles.page}>
            <div class={styles.pageBody}>
                <LogoComponent />
                <div class={styles.content}>
                    <h2 class={styles.header}>Page Not Found</h2>
                    <img class={styles.image} src="img/tempsnip.png" alt="404" />
                    <Link to="/">
                        <button  class={styles.button}>back to home</button>
                    </Link>
                </div>
            </div>
            <FooterComponent />
        </div>
    );
}
