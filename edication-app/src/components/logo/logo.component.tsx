import React from 'react';
import {stylesList} from './styles';

export const LogoComponent: React.FC = () => {
    const classes = stylesList();
    return (
        <div className={classes.logo}>
            <strong>netflix</strong>roulette
        </div>
    );
}
