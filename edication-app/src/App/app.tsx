import React from 'react';
import SimpleComponent from './simple.component';
import PureComponent from './pure.component';
import ListComponent from './list.component';

function App() {
    return (
        <div className="AppComponent">
            <header id="header"/>
            <div id="greating" />
            <SimpleComponent />
            <PureComponent />
            <ListComponent />
        </div>
    );
};

export default App;