import React from 'react';
import {useStyles} from './styles';

export const LogoComponent = (): JSX.Element => {
    const classes = useStyles();
    return (
        <div className={classes.logo}>
            <strong>netflix</strong>roulette
        </div>
    );
}
