import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { orderAlphabeticallyByName } from "./helper";

const initialState = [];

export const addCountriesAsync = createAsyncThunk("countries/fetchCountries", async () => {
  const response = await fetch("https://restcountries.com/v3.1/all?fields=name,cca2");
  const countries = await response.json();
  return countries.sort(orderAlphabeticallyByName);
});

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    // addCountries: (state, action) => {
    //   state = action;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCountriesAsync.pending, (state) => {
        // state.status = 'loading';
      })
      .addCase(addCountriesAsync.fulfilled, (state, action) => {
        // state.status = 'idle';
        //  console.log(action.payload)
        return action.payload; // using 'return' means clear and reinitiate a new state object
      });
  },
});

// Action creators are generated for each case reducer function
export const { addCountries } = countriesSlice.actions;

export default countriesSlice.reducer;
