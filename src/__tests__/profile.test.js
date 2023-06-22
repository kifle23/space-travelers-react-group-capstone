import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import Profile from '../components/profile/Profile';

it('Test if my_profile renderers correctly', () => {
  const missions = [];
  const renderedMission = renderer.create(
    <Provider store={store}>
      <Profile missions={missions} />
    </Provider>,
  );
  expect(renderedMission).toMatchSnapshot();
});
