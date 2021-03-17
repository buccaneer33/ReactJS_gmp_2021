import React from 'react';
import {stylesList} from './styles';
import {LogoComponent} from '../logo/logo.component';

export const FooterComponent: React.FC = (): JSX.Element => {
    const classes = stylesList();
    return (
        <div className={classes.footer}>
            <LogoComponent />
        </div>
    );
}
