import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import HttpService from '../api/service-handler';

export const initialState = {
  missions: [],
  status: 'idle',
  error: null,
};

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const response = await HttpService.getMissions('missions');
    return response;
  },
);

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    setMissions: (state, action) => {
      const mission = {
        id: action.payload.mission_id,
        missionName: action.payload.mission_name,
        description: action.payload.description,
        url: action.payload.wikipedia,
        reserved: false,
      };
      return {
        ...state,
        missions: [...state.missions, mission],
      };
    },
    getActiveMissions: (state) => state.missions.filter((mission) => mission.reserved === true),
    updateMission: (state, action) => {
      const id = action.payload;
      const missionIndex = state.missions.findIndex((x) => x.id === id);
      const mission = state.missions[missionIndex];
      const updatedMission = {
        ...mission,
        reserved: !mission.reserved,
      };
      const updatedMissions = [
        ...state.missions.slice(0, missionIndex),
        updatedMission,
        ...state.missions.slice(missionIndex + 1),
      ];
      return {
        ...state,
        missions: updatedMissions,
      };
    },
  },
  extraReducers: {
    [fetchMissions.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [fetchMissions.fulfilled]: (state, action) => {
      const container = [];
      const { data } = action.payload;
      data.forEach((x) => {
        const mission = {
          id: x.mission_id,
          missionName: x.mission_name,
          description: x.description,
          url: x.wikipedia,
          reserved: false,
        };
        container.push(mission);
      });
      return {
        ...state,
        missions: container,
        status: 'succeeded',
      };
    },
    [fetchMissions.rejected]: (state, action) => ({
      ...state,
      status: 'failed',
      error: action.error.message,
    }),
  },
});

export const getAllMissions = (state) => state.missions.missions;
export const getMissionStatus = (state) => state.missions;
export const getMissionError = (state) => state.missions;

export const { updateMission, setMissions, getActiveMissions } = missionSlice.actions;

export default missionSlice.reducer;
