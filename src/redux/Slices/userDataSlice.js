import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userData: null,
  accessToken: '',
  refreshToken: '',
  isSurvey: false,
  deviceToken: '',
};

export const userDataSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userDataSave: (state, action) => {
      state.userData = action.payload;
    },
    accessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    refreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
    userSurveySave: (state, action) => {
      state.isSurvey = action.payload;
    },
    deviceTokenSave: (state, action) => {
      state.deviceToken = action.payload;
    },
    clearState: (state, action) => {
      state.userData = null;
      state.accessToken = '';
      state.refreshToken = '';
      state.deviceToken = '';
    },
  },
});

export const {
  userDataSave,
  accessToken,
  refreshToken,
  userSurveySave,
  deviceTokenSave,
  clearState,
} = userDataSlice.actions;

export default userDataSlice.reducer;
