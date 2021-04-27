import React from 'react';
import {render, screen } from '@testing-library/react';
import {MoviesCounterComponent} from './moviesCounter.component';

describe('LogoComponent', () => {
  
    test('component is created', () => {
        render(<MoviesCounterComponent moviesCount={0} />);
        expect(screen).toBeDefined();
    });
    test('component conteins "100"', () => {
        render(<MoviesCounterComponent moviesCount={100} />);
        expect(screen.getByText('100')).toBeInTheDocument();
    });
    test('component conteins "movies found"', () => {
        render(<MoviesCounterComponent moviesCount={100} />);
        expect(screen.getByText('movies found')).toBeInTheDocument();
    });
    test('test snapchot component', () => {
        const component = render(<MoviesCounterComponent moviesCount={0} />).container;
        expect(component).toMatchSnapshot();
    });
});
