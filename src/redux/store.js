import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './features/Rockets/RocketSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});

export default store;
