import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { CAMPSITES } from "../../app/shared/CAMPSITES";
import { baseUrl } from "../../app/shared/baseUrl";
import { mapImageURL } from "../../utils/manageImageURL";

export const fetchCampsites = createAsyncThunk(
  "campsites/fetchCampsites",
  async () => {
    const response = await fetch(baseUrl + "campsites");
    if (!response.ok) {
      return Promise.reject("Unable to fetch, status: " + response.status);
    }
    const data = await response.json();
    return data;
  }
);

const initialState = {
  campsitesArray: [],
  isLoading: true,
  errMsg: "",
};

const campsitesSlice = createSlice({
  name: "campsites",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCampsites.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCampsites.fufilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = "";
      state.campsitesArray = mapImageURL(action.payload);
    },
    [fetchCampsites.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error ? action.error.message : "Fetch failed";
    },
  },
});

export const campsitesReducer = campsitesSlice.reducer;

export const selectAllCampsites = (state) => {
  return state.campsites.campsitesArray;
};

export const selectCampsiteById = (id) => (state) => {
  return state.campsites.campsitesArray.find(
    (campsite) => campsite.id === parseInt(id)
  );
};

export const selectFeaturedCampsites = (state) => {
  return state.campsites.campsitesArray.find((campsite) => campsite.featured);
};
