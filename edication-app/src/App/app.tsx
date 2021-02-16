import React from 'react';
import { SimpleComponent } from './simple.component';
import { PureComponent } from './pure.component';
import { ListComponent } from './list.component';
import { Greatings } from '../arrow-function.component/arrow-function.component';

const pageHeader =  React.createElement(
    'h1',
    { className: 'headerTitle' },
    'Hello, World!'
)

export function App() {
    return (
        <div className="AppComponent">
            { pageHeader }
            <Greatings />
            <SimpleComponent />
            <PureComponent />
            <ListComponent />
        </div>
    );
};
