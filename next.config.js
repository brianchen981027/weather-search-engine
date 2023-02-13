/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["openweathermap.org"],
  },
  publicRuntimeConfig: {
    WEATHER_API_SERVER: "https://api.openweathermap.org/data/2.5/weather",
    COUNTRY_AND_CITY_API_SERVER: "https://api.countrystatecity.in/v1",
  },
};

module.exports = nextConfig;
