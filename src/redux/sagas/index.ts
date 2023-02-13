import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import {
  CityRequestProps,
  CityResponseProps,
  CountryResponseProps,
  WeatherRequestProps,
  WeatherResponceProps
} from '@/Interfaces/index';

import { fail, getAllCountry, getCity, getWeather, successful } from '@/Slices/commonSlice';

import { getCityAPI, getCountryAPI, getWeatherAPI } from '@/Axios/index';

function* handleGetAllCountry() {
  try {
    const res: AxiosResponse<CountryResponseProps> = yield call(getCountryAPI);
    yield put(successful({ country: res.data }));
  } catch (e) {
    yield put(fail(e));
  }
}

function* handleGetCity({ payload }: PayloadAction<CityRequestProps>) {
  const { countryCode } = payload;
  try {
    const res: AxiosResponse<CityResponseProps> = yield call(getCityAPI, {
      countryCode,
    });
    yield put(successful({ city: res.data }));
  } catch (e) {
    yield put(fail(e));
  }
}

function* handleGetWeather({ payload }: PayloadAction<WeatherRequestProps>) {
  try {
    const res: AxiosResponse<WeatherResponceProps> = yield call(
      getWeatherAPI,
      payload
    );
    yield put(successful({ weatherData: res.data }));
  } catch (e) {
    yield put(fail(e));
  }
}

export function* watchGetCity() {
  yield takeEvery(getAllCountry.type, handleGetAllCountry);
}

export function* watchGetAllCountry() {
  yield takeEvery(getCity.type, handleGetCity);
}

export function* watchGetWeather() {
  yield takeEvery(getWeather.type, handleGetWeather);
}
