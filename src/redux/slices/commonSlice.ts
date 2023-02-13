import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  CityRequestProps,
  CityResponseProps,
  CountryResponseProps,
  WeatherRequestProps,
  WeatherResponseProps
} from '@/Interfaces/index';

interface ValueProps {
  city: Array<CityResponseProps>;
  country: Array<CountryResponseProps>;
  isLoading: boolean;
  weatherData: WeatherResponseProps;
}

const commonSlice = createSlice({
  name: "common",
  initialState: {
    value: {
      city: [],
      country: [],
      isLoading: false,
      weatherData: {
        base: "",
        clouds: {
          all: 0,
        },
        cod: 0,
        coord: {
          lon: 0,
          lat: 0,
        },
        dt: 0,
        id: 0,
        main: {
          temp: 0,
          feels_like: 0,
          temp_min: 0,
          temp_max: 0,
          pressure: 0,
          humidity: 0,
          sea_level: 0,
          grnd_level: 0,
        },
        name: "",
        rain: {
          "1h": 0,
        },
        sys: {
          type: 0,
          id: 0,
          country: "",
          sunrise: 0,
          sunset: 0,
        },
        timezone: 0,
        visibility: 0,
        weather: [
          {
            id: 0,
            main: "",
            description: "",
            icon: "",
          },
        ],
        wind: {
          speed: 0,
          deg: 0,
          gust: 0,
        },
      },
    } as ValueProps,
    loading: false,
    error: "",
  },
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.value.isLoading = action.payload;
    },
    getAllCountry: () => {},
    getCity: (state, _action: PayloadAction<CityRequestProps>) => {
      const assignState = state;
      assignState.loading = true;
      assignState.error = "";
    },
    getWeather: (state, _action: PayloadAction<WeatherRequestProps>) => {
      const assignState = state;
      assignState.loading = true;
      assignState.error = "";
    },
    successful: (state, action) => {
      const assignState = state;
      assignState.value = { ...assignState.value, ...action.payload };
      assignState.loading = false;
    },
    fail: (state, action) => {
      const assignState = state;
      assignState.error = action.payload;
      assignState.loading = false;
    },
  },
});

export const {
  setLoading,
  getAllCountry,
  getCity,
  getWeather,
  successful,
  fail,
} = commonSlice.actions;

export default commonSlice.reducer;
