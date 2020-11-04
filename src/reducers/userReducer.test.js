import reducer from './userReducer';
import { setUser, setLoading } from '../actions/userActions';

describe('User reducer', () => {
    it('handles the SET_USER action', () => {
        const state = {
            user: {},
            search: '',
            loading: true,
            error: null
        };



        const action = setUser({
            name: 'Ryan-Diff'
        });

        const newState = reducer(state, action);

        expect(newState).toEqual({
            user: { name: 'Ryan-Diff' },
            search: '',
            loading: true,
            error: null
        });
    });

    it('handles the SET_LOADING action', () => {
        const state = {
            user: {},
            search: '',
            loading: true,
            error: null
        };

        const action = setLoading(false);

        const newState = reducer(state, action);

        expect(newState).toEqual({
            user: {},
            search: '',
            loading: false,
            error: null
        });
    });
});