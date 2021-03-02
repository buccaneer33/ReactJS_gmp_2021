import React from 'react';
import {stylesList} from './styles';
import {MovieCard} from '../../common/interfaces/ApiDataInterface';

export const MovieItemComponent = (card: MovieCard): JSX.Element => {
    const classes = stylesList();
    return (
        <div className={classes.movieItem}>
            <img className={classes.movieImg} alt={card.title} src={card.movieCardUrl} />
            <div className={classes.titleBlock}>
                <span className={classes.title}>{card.title}</span>
                <span className={classes.date}>{card.releaseDate}</span>
            </div>
            <div className={classes.ganre}>
                {card.ganre}
            </div>
        </div>
    );
}
