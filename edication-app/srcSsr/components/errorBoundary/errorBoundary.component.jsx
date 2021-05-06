import React, { ErrorInfo, Fragment, ReactNode } from 'react';
import {styles} from './styles.css';

export class ErrorBoundary extends React.Component {
    isEverythingOk

    constructor(props) {
        super(props);
        this.isEverythingOk = true;
    }

    static getDerivedStateFromError(error) {
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
      }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render () {
        return (
            this.isEverythingOk 
            ? <Fragment>{this.props.children}</Fragment>
            : <Fragment><h2 class={styles.error}>Something went wrong</h2></Fragment>
        );
    }
}
