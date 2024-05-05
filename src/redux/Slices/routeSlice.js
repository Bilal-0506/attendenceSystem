import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  route: null,
  params: false,
  marketingParams: {date: '', image: []},
};

export const routeDataSlice = createSlice({
  name: 'routes',
  initialState,
  reducers: {
    routeUpdate: (state, action) => {
      state.route = action.payload;
    },
    updateParams: (state, action) => {
      state.params = action.payload;
    },
    updateMarketingdate: (state, action) => {
      state.marketingParams.date = action.payload;
    },
    updateMarketingImage: (state, action) => {
      state.marketingParams.image = action.payload;
    },
  },
});

export const {
  routeUpdate,
  updateParams,
  updateMarketingdate,
  updateMarketingImage,
} = routeDataSlice.actions;

export default routeDataSlice.reducer;
