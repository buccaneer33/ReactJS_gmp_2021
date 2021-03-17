import React from 'react';
import {stylesList} from './styles';
import {HomeComponent} from '../pages/home/home.component';
import {MovieDetailsComponent} from '../pages/movieDetails/movieDetails.component';
import {moviePreviewStub} from '../appStubs/moviePreviewStub';

const {classes} = stylesList.attach();
export const DataContext = React.createContext(null);

export const App: React.FC = () => {
    return (
        <div className={classes.AppComponent}>
            <DataContext.Provider value={moviePreviewStub}>
                <MovieDetailsComponent />
            </DataContext.Provider>
        </div>
    );
}
