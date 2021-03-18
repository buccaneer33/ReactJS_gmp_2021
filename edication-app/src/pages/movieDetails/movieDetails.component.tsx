import React, {useState, useContext, useCallback} from 'react';
import {useStyles} from './styles';

import {HeaderComponent} from '../../components/header/header.component';
import {MoviesComponent} from '../../components/movies/movies.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {DetailsMovieComponent} from '../../components/detailsMovie/detailsMovie.component';
import {DataContext} from '../../App/app';

const IdCounter = ({initialCount, setCount, minSize, maxSize}) => {
    return (
        <>
            <span>{initialCount}</span>
            <button onClick={() => setCount(minSize, maxSize, initialCount + 1)}>+</button>
            <button onClick={() => setCount(minSize, maxSize, initialCount - 1)}>-</button>
        </>
    );
}

export const MovieDetailsComponent = (): JSX.Element => {
    const classes = useStyles();

    const value = useContext(DataContext)

    const [movieState, setId] = useState(0);

    const setCount = (maxSize, minSize, number): void => {
        let  currentCounter;
        if (number < minSize) {
            currentCounter = minSize;
        } else if (number > maxSize) {
            currentCounter = maxSize;
        } else if (number > minSize && number < maxSize ) {
            currentCounter = number;
        }
        setId(currentCounter);
    }

    const callback = useCallback((minSize, maxSize, number) => {
        console.log('maxSize' + maxSize, 'minSize' +  minSize, 'number' + number);
        setCount(maxSize, minSize, number)
    }, []);

    return (
        <div className={classes.detailsPage}>
            {(movieState && movieState > 0 ) ? <DetailsMovieComponent id={movieState} /> : <HeaderComponent />}
            <IdCounter initialCount={movieState} setCount={callback} minSize={0} maxSize={value.length} />
            <MoviesComponent movies={value} />
            <FooterComponent />
        </div>
    );
}
