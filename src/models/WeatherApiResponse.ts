import WeatherApiCurrent from './WeatherApiCurrent';
import WeatherApiForecast from './WeatherApiForecast';
import WeatherApiLocation from './WeatherApiLocation';

interface WeatherApiResponse {
  location: WeatherApiLocation;
  current: WeatherApiCurrent;
  forecast: WeatherApiForecast;
}

export default WeatherApiResponse;
