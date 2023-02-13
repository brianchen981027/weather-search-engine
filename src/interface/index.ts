interface CountryResponseProps {
  id: number;
  name: string;
  iso2: string;
}

interface CityRequestProps {
  countryCode: string;
}

interface CityResponseProps {
  id: number;
  name: string;
}

interface WeatherRequestProps {
  country: string;
  city: string;
}

interface WeatherResponceProps {
  base: string,
  clouds: {
    all: number
  },
  cod: number,
  coord: {
    lon: number,
    lat: number
  },
  dt: number,
  id: number,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number,
    sea_level: number,
    grnd_level: number
  },
  name: string,
  rain: {
    "1h": number
  },
  sys: {
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number
  },
  timezone: number,
  visibility: number,
  weather: [
    {
      id: number,
      main: string,
      description: string,
      icon: string
    }
  ],
  wind: {
    speed: number,
    deg: number,
    gust: number,
  },
}

export type { CountryResponseProps, CityRequestProps, CityResponseProps, WeatherRequestProps, WeatherResponceProps };
