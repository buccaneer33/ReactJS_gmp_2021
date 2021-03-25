import React, {useEffect} from 'react';
import {stylesList} from './styles';
import {MovieDetailsComponent} from '../pages/movieDetails/movieDetails.component';
import {store} from '../store/store';
import { Provider, useDispatch, useSelector} from "react-redux";
import { fetchMovies } from '../store/actions/fetchMovies';
import {HomeComponent} from '../pages/home/home.component';

const {classes} = stylesList.attach();

export const App: React.FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch])

    const films = useSelector((state) => {
        return state.movieReducer
    })

    if (!(films instanceof Array) &&  typeof(films) === 'boolean') {
        console.log(films);
        if (films === true) {
            dispatch(fetchMovies());
        } else {
            console.log('something wrong')
        }
    }

    return (
        <div className={classes.AppComponent}>
            <Provider store={store}>
                <HomeComponent />
            </Provider>
        </div>
    );
}
