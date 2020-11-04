import React from 'react';
import { render, cleanup } from '@testing-library/react';
import UserSearch from './UserSearch';
import { Provider } from 'react-redux';
import store from '../store';

describe('UserSearch component', () => {
  afterEach(() => cleanup());
  it('renders UserSearch', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <UserSearch />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});