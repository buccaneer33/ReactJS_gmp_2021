import React from 'react';
import {stylesList} from './styles';
import {ButtonComponent} from '../button/button.component';

export const MovieSearchComponent: React.FC = () => {
    const classes = stylesList();
    return (
            <>
                <h1 className={classes.title}>find your movie</h1>
                <div className={classes.search}>
                    <input type="text" className={classes.searchInput} placeholder="What do you want to watch?" />
                    <ButtonComponent className={classes.button} >search</ButtonComponent>
                </div>
            </>
    );
}
