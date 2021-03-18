import React from 'react';
import {useStyles} from './styles';

export const LogoComponent: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.logo}>
            <strong>netflix</strong>roulette
        </div>
    );
}
