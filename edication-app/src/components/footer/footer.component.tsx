import React from 'react';
import {useStyles} from './styles';
import {LogoComponent} from '../logo/logo.component';

export const FooterComponent: React.FC = (): JSX.Element => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <LogoComponent />
        </div>
    );
}
