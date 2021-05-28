import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  auth: {},
}

const userSessionThunk = createAsyncThunk(
  'auth/userSession',
  async (token, thunkAPI) => {

  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userSession: (state, action) => {
      state.auth = action.payload;
    },
  },
})

export const { userSession } = authSlice.actions

export default authSlice.reducer;