import React, {useEffect} from 'react';
import {stylesList} from './styles';
import {MovieDetailsComponent} from '../pages/movieDetails/movieDetails.component';
import {store} from '../store/store';
import { Provider, useDispatch} from "react-redux";
import { getMovies } from '../store/actions/getMovies';
import {HomeComponent} from '../pages/home/home.component';

const {classes} = stylesList.attach();

export const App: React.FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies([]));
    }, [dispatch])

    return (
        <div className={classes.AppComponent}>
            <Provider store={store}>
                <HomeComponent />
            </Provider>
        </div>
    );
}
