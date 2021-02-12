import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App/app';
import Greatings from './arrow-function.component/arrow-function.component';

const pageHeader =  React.createElement(
    'h1',
    { className: 'headerTitle' },
    'Hello, World!'
);

const rootElement = document.getElementById('root');

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    rootElement
);
ReactDOM.render(
    pageHeader,
    document.getElementById('header')
);
ReactDOM.render(
    <Greatings />,
    document.getElementById('greating')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
