import {movieReducer} from './movieReducer';
import {ACTIONS} from '../actions/actionsTypes';
import thunk from 'redux-thunk'
import {getMovies} from '../actions/getMovies'
import {filmStub} from '../../appStubs/filmsStub';

describe('movies reducer', () => {

    const create = () => {
        const store = {
          getState: jest.fn(() => ({})),
          dispatch: jest.fn()
        }
        const next = jest.fn()

        const invoke = action => thunk(store)(next)(action)

        return { store, next, invoke }
    }

    const thunk = ({ dispatch, getState }) => next => action => {
        if (typeof action === 'function') {
          return action(dispatch, getState)
        }

        return next(action)
    }

     test('should return the initial state', () => {
        expect(movieReducer(['defualt test'], {
            type: 'testAction'}
        )).toEqual(['defualt test'])
    });
    test('add movies return the initial state', () => {
        expect(movieReducer([], {
            type: ACTIONS.ADD_MOVIE,
            text: 'Run the tests'
        })).toEqual(undefined)
    });
    test('ADD_MOVIE dont return the initial state', () => {
        expect(movieReducer(['defoalt test'], {
            type: ACTIONS.ADD_MOVIE,
            text: 'Run the tests'
        }))
        .toEqual(undefined)
    });

    test('ADD_MOVIE return payload', () => {
        expect(movieReducer(['defoalt state'], {
            type: ACTIONS.ADD_MOVIE,
            payload: 'Run the tests'}))
        .toEqual('Run the tests')
    });
    test('REMOVE_MOVIE dont return the initial statee', () => {
        expect(movieReducer(['defoalt test'], {
            type: ACTIONS.REMOVE_MOVIE,
            text: 'Run the tests'
        }))
        .toEqual(undefined)
    });

    test('EDIT_MOVIE return payload', () => {
        expect(movieReducer(['defoalt state'], {
            type: ACTIONS.EDIT_MOVIE,
            payload: 'Run the tests'}))
        .toEqual('Run the tests')
    });
    test('EDIT_MOVIE dont return the initial statee', () => {
        expect(movieReducer(['defoalt test'], {
            type: ACTIONS.EDIT_MOVIE,
            text: 'Run the tests'
        }))
        .toEqual(undefined)
    });

    test('GET_MOVIES return payload', () => {
        expect(movieReducer(['defoalt state'], {
            type: ACTIONS.GET_MOVIES,
            payload: 'Run the tests'}))
        .toEqual('Run the tests')
    });
    test('GET_MOVIES dont return the initial statee', () => {
        expect(movieReducer(['defoalt test'], {
            type: ACTIONS.GET_MOVIES,
            text: 'Run the tests'
        }))
        .toEqual(undefined)
    });

    test('GET_MOVES_BY_ID return payload', () => {
        expect(movieReducer(['defoalt state'], {
            type: ACTIONS.GET_MOVES_BY_ID,
            payload: 'Run the tests'}))
        .toEqual('Run the tests')
    });
    test('GET_MOVES_BY_ID dont return the initial statee', () => {
        expect(movieReducer(['defoalt test'], {
            type: ACTIONS.GET_MOVES_BY_ID,
            text: 'Run the tests'
        }))
        .toEqual(undefined)
    });

    test('REMOVE_MOVIE return payload', () => {
        expect(movieReducer(['defoalt state'], {
            type: ACTIONS.REMOVE_MOVIE,
            payload: 'Run the tests'}))
        .toEqual('Run the tests')
    });

    test('passes through non-function action', () => {
        const { next, invoke } = create()
        const action = { type: 'TEST' }
        invoke(action)
        expect(next).toHaveBeenCalledWith(action)
    });
    it('calls the function', () => {
        const { invoke } = create()
        const fn = jest.fn()
        invoke(fn)
        expect(fn).toHaveBeenCalled()
    })
    it('passes fake dispatch and getState', () => {
        const { store, invoke } = create()
        invoke((dispatch, getState) => {
          dispatch('GET_MOVIES')
          getState()
        })
        expect(store.dispatch).not.toHaveBeenCalledWith('TEST DISPATCH')
        expect(store.getState).toHaveBeenCalled()
    })
    it('passes real dispatch and getState', () => {
        const { store, invoke } = create()
        invoke((dispatch, getState) => {
          dispatch('GET_MOVIES')
          getState()
        })
        expect(store.dispatch).toHaveBeenCalledWith('GET_MOVIES')
        expect(store.getState).toHaveBeenCalled()
    })
});
