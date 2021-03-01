import React from 'react';
import {useStyles} from './styles';
import {LogoComponent} from '../logo/logo.component';

const {classes} = useStyles.attach();

export class FooterComponent extends React.Component {
    render (): JSX.Element {
        return (
            <div className={classes.footer}>
                <LogoComponent />
            </div>
        );
    }
}
