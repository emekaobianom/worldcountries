import { configureStore } from "@reduxjs/toolkit";
import countriesReducer, { addCountriesAsync } from "./countriesSlice";

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

//initialise onStore start once
store.dispatch(addCountriesAsync());

export default store;
