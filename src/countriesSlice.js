import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: {
      common: "Nigeria",
      official: "Federal Republic of Nigeria",
      nativeName: {
        eng: { official: "Federal Republic of Nigeria", common: "Nigeria" },
      },
    },
    tld: [".ng"],
    cca2: "NG",
    ccn3: "566",
    cca3: "NGA",
    cioc: "NGR",
    independent: true,
    status: "officially-assigned",
    unMember: true,
    currencies: { NGN: { name: "Nigerian naira", symbol: "₦" } },
    idd: { root: "+2", suffixes: ["34"] },
    capital: ["Abuja"],
    altSpellings: ["NG", "Nijeriya", "Naíjíríà", "Federal Republic of Nigeria"],
    region: "Africa",
    subregion: "Western Africa",
    languages: { eng: "English" },
    translations: {
      ara: { official: "جمهورية نيجيريا الاتحادية", common: "نيجيريا" },
      bre: { official: "Republik Kevreadel Nigeria", common: "Nigeria" },
      ces: { official: "Nigerijská federativní republika", common: "Nigérie" },
      cym: { official: "Federal Republic of Nigeria", common: "Nigeria" },
      deu: { official: "Bundesrepublik Nigeria", common: "Nigeria" },
      est: { official: "Nigeeria Liitvabariik", common: "Nigeeria" },
      fin: { official: "Nigerian liittotasavalta", common: "Nigeria" },
      fra: { official: "République fédérale du Nigeria", common: "Nigéria" },
      hrv: { official: "Savezna Republika Nigerija", common: "Nigerija" },
      hun: { official: "Nigéria", common: "Nigéria" },
      ita: { official: "Repubblica federale di Nigeria", common: "Nigeria" },
      jpn: { official: "ナイジェリア連邦共和国", common: "ナイジェリア" },
      kor: { official: "나이지리아 연방 공화국", common: "나이지리아" },
      nld: { official: "Federale Republiek Nigeria", common: "Nigeria" },
      per: { official: "جمهوری فدرال نیجریه", common: "نیجریه" },
      pol: { official: "Federalna Republika Nigerii", common: "Nigeria" },
      por: { official: "República Federal da Nigéria", common: "Nigéria" },
      rus: { official: "Федеративная Республика Нигерия", common: "Нигерия" },
      slk: { official: "Nigérijská federatívna republika", common: "Nigéria" },
      spa: { official: "República Federal de Nigeria", common: "Nigeria" },
      swe: { official: "Förbundsrepubliken Nigeria", common: "Nigeria" },
      tur: { official: "Nijerya Federal Cumhuriyeti", common: "Nijerya" },
      urd: { official: "وفاقی جمہوریہ نائجیریا", common: "نائجیریا" },
      zho: { official: "尼日利亚联邦共和国", common: "尼日利亚" },
    },
    latlng: [10.0, 8.0],
    landlocked: false,
    borders: ["BEN", "CMR", "TCD", "NER"],
    area: 923768.0,
    demonyms: {
      eng: { f: "Nigerian", m: "Nigerian" },
      fra: { f: "Nigériane", m: "Nigérian" },
    },
    flag: "\uD83C\uDDF3\uD83C\uDDEC",
    maps: {
      googleMaps: "https://goo.gl/maps/LTn417qWwBPFszuV9",
      openStreetMaps: "https://www.openstreetmap.org/relation/192787",
    },
    population: 206139587,
    gini: { 2018: 35.1 },
    fifa: "NGA",
    car: { signs: ["WAN"], side: "right" },
    timezones: ["UTC+01:00"],
    continents: ["Africa"],
    flags: {
      png: "https://flagcdn.com/w320/ng.png",
      svg: "https://flagcdn.com/ng.svg",
    },
    coatOfArms: {
      png: "https://mainfacts.com/media/images/coats_of_arms/ng.png",
      svg: "https://mainfacts.com/media/images/coats_of_arms/ng.svg",
    },
    startOfWeek: "monday",
    capitalInfo: { latlng: [9.08, 7.53] },
    postalCode: { format: "######", regex: "^(\\d{6})$" },
  },
];

export const addCountriesAsync = createAsyncThunk("countries/fetchCountries", async () => {
  // await fetch("https://restcountries.com/v3.1/all?fields=name,cca2")
  //   .then((response) => response.json())
  //   .then((response) => {
  //     // let sortedCountries = response.sort((a) => a.name);
  //     // console.log(response);
  //    return response;
  //   })
  //   .catch((err) => console.error(err));


  const response = await fetch("https://restcountries.com/v3.1/all?fields=name,cca2");
  const countries = await response.json();
  return countries;

});

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    addCountries: (state,action) => {
      state = action;
    },
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
