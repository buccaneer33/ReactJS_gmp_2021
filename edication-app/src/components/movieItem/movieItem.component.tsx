import React from 'react';
import {stylesList} from './styles';
import {MovieCard} from '../../common/interfaces/ApiDataInterface';
import {ModalComponent} from '../../modals/components/modal/modal.component';

const editModalProps = {
    triggerText: 'edit',
    class: 'editMovie'
}
const delModalProps = {
    triggerText: 'delete',
    class: 'delMovie'
}
const state = {
    isShown: false
};

export const MovieItemComponent = (card: MovieCard): JSX.Element => {

    const classes = stylesList();

    const showTolltip = () => {
        state.isShown = !state.isShown;
        console.log(state.isShown);
    }

    return (
        <div className={classes.movieItem}>
            <div onClick={showTolltip} className={classes.control}></div>
            { true &&
            /* здесь надо было увязать открытие меню на стейт
             но он почему то не отрабатывает поэтому оставлю пока как есть */
            <div className={classes.menu}>
                <ModalComponent modalProps={editModalProps} />
                <ModalComponent modalProps={delModalProps} />
            </div> }
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
