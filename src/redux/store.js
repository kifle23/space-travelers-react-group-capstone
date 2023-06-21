import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './features/Rockets/RocketSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});

const selectRockets = (store) => store.rockets;
export { selectRockets };
export default store;
