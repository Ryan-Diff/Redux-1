import reducer from './userReducer';
import { setUser, setLoading } from '../actions/userActions';

describe('User reducer', () => {
    it('handles the SET_USER action', () => {
        const state = {
            userProfile: {},
            userRepos: [],
            search: '',
            loading: true,
            error: null
        };

        const action = setUser({
            userProfile: { name: 'Ryan-Diff' },
            userRepos: [{ repo: 'repo' }]
        });

        const newState = reducer(state, action);

        expect(newState).toEqual({
            userProfile: { name: 'Ryan-Diff' },
            userRepos: [{ repo: 'repo' }],
            search: '',
            loading: true,
            error: null
        });
    });

    it('handles the SET_LOADING action', () => {
        const state = {
            userProfile: {},
            userRepos: [],
            search: '',
            loading: true,
            error: null
        };

        const action = setLoading(false);

        const newState = reducer(state, action);

        expect(newState).toEqual({
            userProfile: {},
            userRepos: [],
            search: '',
            loading: false,
            error: null
        });
    });
});