import React, {useEffect, useState} from 'react';
import {useStyles} from './styles';
import {newMovieCard} from '../../common/interfaces/ApiDataInterface';
import {useDispatch} from 'react-redux';
import { getMoviesById } from '../../store/actions/getMoviesById';

interface DetailsProps {
    id: number
}

export const DetailsMovieComponent: React.FC<DetailsProps> = ({id}): JSX.Element => {
    const classes = useStyles();

    const [selectedFilm, setSelected] = useState<newMovieCard>();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMoviesById(id)).then(result => 
            setSelected(result)
        );
    }, [id, dispatch])

    return (<>
        {selectedFilm &&
            (<div className={classes.content}>
                <div className={classes.logo}>
                    <strong>netflix</strong>roulette
                </div>
                <div className={classes.imgBlock}>
                    <img src={selectedFilm.poster_path} alt={selectedFilm.title} className={classes.img} />
                </div>
                <div className={classes.contentBlock}>
                    <div className={classes.contentHeaderBlock}>
                        <h2 className={classes.contentHeader}>{selectedFilm.title}</h2>
                        <span className={classes.rating}>{selectedFilm.vote_average}</span>
                    </div>
                    <div className={classes.ganreBlock}>
                        {selectedFilm.genres && selectedFilm.genres.map((ganre, index) => <span key={index}> {ganre} </span>)}
                    </div>
                    <div className={classes.infoBlock}>
                        <span className={classes.info}>{selectedFilm.release_date}</span>
                        <span className={classes.info}>{selectedFilm.runtime} min</span>
                    </div>
                    <div className={classes.overviewBlock}>
                        {selectedFilm.overview}
                    </div>
                </div>
                <strong>{id}</strong>
            </div>)}
    </>);
}
