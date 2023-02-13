import axios from 'axios';
import getConfig from 'next/config';

import { CityRequestProps, WeatherRequestProps } from '@/Interfaces/index';

const { publicRuntimeConfig } = getConfig();

const COUNTRY_APIKEY =
  "aTlsWnhtdE5VMkt1RWR4dFVHV3Bpa1drVlU1NjZjc1gzWDFCdkw1eg==";
const WEATHER_APIKEY = "c678726a9672a23eec9c9b702be692e9";

const axiosCountyInstance = axios.create({
  baseURL: publicRuntimeConfig.COUNTRY_AND_CITY_API_SERVER,
  headers: {
    "X-CSCAPI-KEY": COUNTRY_APIKEY,
  },
});

const axiosWeatherInstance = axios.create({
  baseURL: publicRuntimeConfig.WEATHER_API_SERVER,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosCountyInstance.defaults.timeout = 30000;
axiosWeatherInstance.defaults.timeout = 30000;

const getCountryAPI = () => axiosCountyInstance.get(`/countries`);

const getCityAPI = ({ countryCode }: CityRequestProps) =>
  axiosCountyInstance.get(`/countries/${countryCode}/cities`);

const getWeatherAPI = ({ country, city }: WeatherRequestProps) =>
  axiosWeatherInstance.get(`?q=${city},${country}&appid=${WEATHER_APIKEY}`);

export { getCountryAPI, getCityAPI, getWeatherAPI };
