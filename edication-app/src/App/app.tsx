import React, {useEffect} from 'react';
import {stylesList} from './styles';

import {store} from '../store/store';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";
import {Provider, useDispatch} from "react-redux";
import {getMovies} from '../store/actions/getMovies';
import {HomeComponent} from '../pages/home/home.component';
import {NoMoviesFoundComponent} from '../pages/noMoviesFound/noMoviesFound.component';
import {MovieDetailsComponent} from '../pages/movieDetails/movieDetails.component';
import {Page404Component} from '../pages/404/404';

const {classes} = stylesList.attach();

export const App: React.FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies([]));
    }, [dispatch])

    const Details = () => {
        const {id} = useParams();
        return (<MovieDetailsComponent id={id}/>);
    }
    const Search = () => {
        const {slug} = useParams();
        return (<NoMoviesFoundComponent searchString={slug} />);
      }

    return (
        <div className={classes.AppComponent}>
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path={`/film/:id`} component={Details} />
                        <Route path={`/search/:slug`} component={Search} />
                        <Route exact path="/" component={HomeComponent} />
                        <Route path="*" component={Page404Component} />
                    </Switch>
                </Router>
            </Provider>
        </div>
    );
}
