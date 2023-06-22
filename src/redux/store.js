import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './features/Rockets/RocketSlice';
import MissionSlice from './missionSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: MissionSlice,
  },
});

export default store;
