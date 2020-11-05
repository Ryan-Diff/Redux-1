import React from 'react';
import { render, cleanup } from '@testing-library/react';
import UserInfo from './UserInfo';
import { Provider } from 'react-redux';
import store from '../store';

describe('UserInfo component', () => {
    afterEach(() => cleanup());

    it('Renders a users GitHub info', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <UserInfo />
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
