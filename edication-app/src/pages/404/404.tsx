import React from 'react';
import {useStyles} from './styles';
import {Link} from "react-router-dom";
import {FooterComponent} from '../../components/footer/footer.component';
import {LogoComponent} from '../../components/logo/logo.component';

export const Page404Component = (): JSX.Element => {

    const classes = useStyles();

    return (
        <div className={classes.page}>
            <div className={classes.pageBody}>
                <LogoComponent />
                <div className={classes.content}>
                    <h2 className={classes.header}>Page Not Found</h2>
                    <img className={classes.image} src="img/tempsnip.png" alt="404" />
                    <Link to="/">
                        <button  className={classes.button}>back to home</button>
                    </Link>
                </div>
            </div>
            <FooterComponent />
        </div>
    );
}
