import { configureStore } from '@reduxjs/toolkit';
import MissionSlice from './missionSlice';

const store = configureStore({
  reducer: {
    missions: MissionSlice,
  },
});

export default store;
