import { SET_USER, SET_LOADING, SET_SEARCH } from '../actions/userActions';

const initialState = {
    user: {},
    search: '',
    loading: false,
    error: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.payload };
        case SET_LOADING:
            return { ...state, loading: action.payload };
        case SET_SEARCH:
            return { ...state, search: action.payload };
        default:
            return state;
    }
}