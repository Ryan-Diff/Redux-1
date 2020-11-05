import reducer from './userReducer';
import { setUser, setLoading } from '../actions/userActions';

describe('User reducer', () => {
    it('handles the SET_USER action', () => {
        const state = {
            user: {},
            userRepos: [],
            search: '',
            loading: true,
            error: null
        };

        const action = setUser({
           user: { name: 'Ryan-Diff' },
           userRepos: [{ repo: 'repo' }]
        });

        const newState = reducer(state, action);

        expect(newState).toEqual({
            user: { name: 'Ryan-Diff' },
            userRepos: [{ repo: 'repo' }],
            search: '',
            loading: true,
            error: null
        });
    });

    it('handles the SET_LOADING action', () => {
        const state = {
            user: {},
            userRepos: [],
            search: '',
            loading: true,
            error: null
        };

        const action = setLoading(false);

        const newState = reducer(state, action);

        expect(newState).toEqual({
            user: {},
            userRepos: [],
            search: '',
            loading: false,
            error: null
        });
    });
});