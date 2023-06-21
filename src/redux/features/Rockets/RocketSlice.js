import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  rocket: [],
  error: '',
};
const url = 'https://api.spacexdata.com/v4/rockets';
export const fetchRockets = createAsyncThunk('rocket/fetchrockets', () => axios.get(url).then((res) => res.data));

const RocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    reserveRocket: (state, { payload }) => ({
      ...state,
      rocket: state.rocket.map((rocket) => {
        if (payload.id !== rocket.id) return rocket;
        return { ...rocket, reserved: true };
      }),
    }),
    cancelReserveRocket: (state, { payload }) => ({
      ...state,
      rocket: state.rocket.map((rocket) => {
        if (payload.id !== rocket.id) return rocket;
        return { ...rocket, reserved: false };
      }),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => ({
      ...state, loading: true,
    }));
    builder.addCase(fetchRockets.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      rocket: action.payload.map((rocket) => ({ ...rocket, reserved: false })),
      error: '',
    }));

    builder.addCase(fetchRockets.rejected, (state, action) => ({
      ...state,
      loading: false,
      rocket: [],
      error: action.error.message,
    }));
  },
});
export const { reserveRocket, cancelReserveRocket } = RocketSlice.actions;
export default RocketSlice.reducer;
