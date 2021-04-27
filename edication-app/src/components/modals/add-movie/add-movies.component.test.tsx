import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import {AddMovieComponent} from './add-movie.component';
import {store} from '../../../store/store';
import {Provider} from "react-redux";
import userEvent from '@testing-library/user-event'

describe('AddMovies', () => {
    test('rendering without crash', async () => {
        const handleSubmit = jest.fn()
        render(
            <Provider store={store}>
                <AddMovieComponent closeModal={handleSubmit} />
            </Provider>
        )
    })
    test('rendering and submitting a basic Formik form', async () => {
        const handleClose = jest.fn()
        const onSubmit = jest.fn()
        render(
            <Provider store={store}>
                <AddMovieComponent closeModal={handleClose} />
            </Provider>
        )

        userEvent.type(screen.getByLabelText(/title/i), 'John')
        userEvent.type(screen.getByLabelText(/tagline/i), 'Dee')
        userEvent.type(screen.getByLabelText(/Release date/i), '2021-04-30')
        userEvent.type(screen.getByLabelText(/Poster path/i), 'sadwsgfsgfsd')
        userEvent.type(screen.getByLabelText(/Owerview/i), 'best comedy')
        userEvent.type(screen.getByLabelText(/runtime/i), '130')

        userEvent.click(screen.getByRole('button', { name: /submit/i }))

        await waitFor(() =>
            expect(onSubmit).toHaveBeenCalledWith({
                title: 'John',
                tagline: 'Dee',
                'Release date': '2021-04-30',
                'Poster path': 'sadwsgfsgfsd',
                Owerview: 'best comedy',
                runtime: '130'
            }, expect.anything())
        )
    });
});
