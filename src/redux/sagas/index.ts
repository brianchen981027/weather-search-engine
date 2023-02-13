import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import {
  CityRequestProps,
  CityResponseProps,
  CountryResponseProps,
  WeatherRequestProps,
  WeatherResponseProps
} from '@/Interfaces/index';

import {
  fail,
  getAllCountry,
  getCity,
  getWeather,
  setLoading,
  successful
} from '@/Slices/commonSlice';

import { getCityAPI, getCountryAPI, getWeatherAPI } from '@/Axios/index';

function* handleGetAllCountry() {
  try {
    yield put(setLoading(true));
    const res: AxiosResponse<CountryResponseProps> = yield call(getCountryAPI);
    yield put(successful({ country: res.data }));
  } catch (e) {
    yield put(fail(e));
  } finally {
    yield put(setLoading(false));
  }
}

function* handleGetCity({ payload }: PayloadAction<CityRequestProps>) {
  const { countryCode } = payload;
  try {
    yield put(setLoading(true));
    const res: AxiosResponse<CityResponseProps> = yield call(getCityAPI, {
      countryCode,
    });
    yield put(successful({ city: res.data }));
  } catch (e) {
    yield put(fail(e));
  } finally {
    yield put(setLoading(false));
  }
}

function* handleGetWeather({ payload }: PayloadAction<WeatherRequestProps>) {
  try {
    yield put(setLoading(true));
    const res: AxiosResponse<WeatherResponseProps> = yield call(
      getWeatherAPI,
      payload
    );
    yield put(successful({ weatherData: res.data }));
  } catch (e) {
    yield put(fail(e));
  } finally {
    yield put(setLoading(false));
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
