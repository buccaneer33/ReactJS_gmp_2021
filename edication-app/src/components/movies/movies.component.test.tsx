import React from 'react';
import {render, screen} from '@testing-library/react';
import {MoviesComponent} from './movies.component';
import {filmStub} from '../../appStubs/filmsStub';
import {store} from '../../store/store';
import {Provider} from "react-redux";
import {
    BrowserRouter as Router,
} from "react-router-dom";

describe('LogoComponent', () => {

    // let component;

    const customRender = () => {
        return render(
            <Provider store={store}>
                <Router>
                    <MoviesComponent movies={filmStub} />
                </Router>
            </Provider>
        ) 
    }
    const emptyRender = () => {
        return render(
            <Provider store={store}>
                <Router>
                    <MoviesComponent movies={[]} />
                </Router>
            </Provider>
        ) 
    }

    test('component conteins "testTitle"', () => {
        customRender();
        expect(screen.getByText('testTitle')).toBeInTheDocument();
    });
    test('component conteins "testDate"', () => {
        customRender();
        expect(screen.getByText('testDate')).toBeInTheDocument();
    });
    test('component with empty rendom', () => {
        emptyRender();
        expect(screen.getByText('No movies found')).toBeInTheDocument();
    });
    test('test snapchot component', () => {
        const component = customRender().container;
        expect(component).toMatchSnapshot();
    });
});
