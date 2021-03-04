import React, { ErrorInfo, ReactNode } from 'react';
import {stylesList} from './styles';

const {classes} = stylesList.attach();

interface Props {
    children: ReactNode;
}
export class ErrorBoundary extends React.Component {
    isEverythingOk: boolean

    constructor(props: Props) {
        super(props);
        this.isEverythingOk = true;
    }

    static getDerivedStateFromError(error: Error): void {
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
      }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log(error, errorInfo);
    }

    render (): JSX.Element {
        return (
            this.isEverythingOk 
            ? <>{this.props.children}</>
            : <><h2 className={classes.error}>Something went wrong</h2></>
        );
    }
}
