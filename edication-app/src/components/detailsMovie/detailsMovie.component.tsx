import React, {useEffect, useState, useContext} from 'react';
import {stylesList} from './styles';
import {DataContext} from '../../App/app';

interface DetailsProps {
    id: number
}

export const DetailsMovieComponent: React.FC <DetailsProps> = ({id}: DetailsProps): JSX.Element => {
    const classes = stylesList();

    const value = useContext(DataContext)

    const [currentMovie, setMovie] = useState(value[id]);

    useEffect(() => {
        setMovie(value[id]);
    }, [id, value])

    return (<>
        {currentMovie && 
            (<div className={classes.content}>
                <div className={classes.logo}>
                    <strong>netflix</strong>roulette
                </div>
                <div className={classes.imgBlock}>
                    <img src={currentMovie.movieUrl} alt={currentMovie.title} className={classes.img} />
                </div>
                <div className={classes.contentBlock}>
                    <div className={classes.contentHeaderBlock}>
                        <h2 className={classes.contentHeader}>{currentMovie.title}</h2>
                        <span className={classes.rating}>{currentMovie.movieRating}</span>
                    </div>
                    <div className={classes.ganreBlock}>{currentMovie.ganre}</div>
                    <div className={classes.infoBlock}>
                        <span className={classes.info}>{currentMovie.releaseDate}</span>
                        <span className={classes.info}>{currentMovie.movieDuration} min</span>
                    </div>
                    <div className={classes.overviewBlock}>
                        {currentMovie.overview}
                    </div>
                </div>
                <strong>{currentMovie.id}</strong>
            </div>)}
    </>);
}
