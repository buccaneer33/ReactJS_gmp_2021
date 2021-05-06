import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import {hot} from 'react-hot-loader';
import {HomeComponent} from './pages/Home/HomeComponent';
import {Page404Component} from './pages/404/404';
import {MovieDetailsComponent} from './pages/movieDetails/movieDetails.component';
import {Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import styles from './App.css';

const App = ({Router, location, context, store,}) => {

    return (
        <div class={styles.app}>
            <Provider store={store}>
                <Router location={location} context={context}>
                    <Switch>
                        <Route exact path="/film/:id" component={MovieDetailsComponent} />
                        <Route path="/search/:searchString" component={HomeComponent} />
                        <Route exact path="/" component={HomeComponent} />
                        <Route path="*" component={Page404Component} />
                    </Switch>
            </Router>
        </Provider>
        </div>
    );
}

export default hot(module)(App);
