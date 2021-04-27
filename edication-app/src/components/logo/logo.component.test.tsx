import React from 'react';
import {render, screen } from '@testing-library/react';
import {LogoComponent} from './logo.component';

describe('LogoComponent', () => {

    test('true is truthy', () => {
        expect(true).toBe(true);
      });
     
      test('false is falsy', () => {
        expect(false).toBe(false);
      });
  
    test('component conteins "roulette"', () => {
        render(<LogoComponent />);
        expect(screen.getByText('roulette')).toBeInTheDocument();
    });
    test('component conteins "netflix"', () => {
        render(<LogoComponent />);
        expect(screen.getByText('netflix')).toBeInTheDocument();
    });
    test('test snapchot component', () => {
        const component = render(<LogoComponent />).container;
        expect(component).toMatchSnapshot();
    });
});
