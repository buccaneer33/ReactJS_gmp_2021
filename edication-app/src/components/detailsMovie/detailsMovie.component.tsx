import React from 'react';
import {useStyles} from './styles';
import {useSelector} from 'react-redux';
import {newMovieCard} from '../../common/interfaces/ApiDataInterface';


interface DetailsProps {
    id: number
}

export const DetailsMovieComponent: React.FC<DetailsProps> = ({id}): JSX.Element => {
    const classes = useStyles();

    const currentFilm: newMovieCard = useSelector((state) => {
        return (state.movieReducer).find(movie => movie.id === id )
    })


    return (<>
        {currentFilm && 
            (<div className={classes.content}>
                <div className={classes.logo}>
                    <strong>netflix</strong>roulette
                </div>
                <div className={classes.imgBlock}>
                    <img src={currentFilm.poster_path} alt={currentFilm.title} className={classes.img} />
                </div>
                <div className={classes.contentBlock}>
                    <div className={classes.contentHeaderBlock}>
                        <h2 className={classes.contentHeader}>{currentFilm.title}</h2>
                        <span className={classes.rating}>{currentFilm.vote_average}</span>
                    </div>
                    <div className={classes.ganreBlock}>
                        {currentFilm.genres.map((ganre, index) => <span key={index}> {ganre} </span>)}
                    </div>
                    <div className={classes.infoBlock}>
                        <span className={classes.info}>{currentFilm.release_date}</span>
                        <span className={classes.info}>{currentFilm.runtime} min</span>
                    </div>
                    <div className={classes.overviewBlock}>
                        {currentFilm.overview}
                    </div>
                </div>
                <strong>{currentFilm.id}</strong>
            </div>)}
    </>);
}
