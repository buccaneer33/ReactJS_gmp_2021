import React from 'react';
import {stylesList} from './styles';
import {LogoComponent} from '../logo/logo.component';

const {classes} = stylesList.attach();

export class FooterComponent extends React.Component {
    render (): JSX.Element {
        return (
            <div className={classes.footer}>
                <LogoComponent />
            </div>
        );
    }
}
