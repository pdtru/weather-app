import WeatherApiLocation from '../models/WeatherApiLocation';
import WeatherApiCurrent from '../models/WeatherApiCurrent';
import WeatherApiForecast from '../models/WeatherApiForecast';
import App from '../components/App';

class AppState {
  app: App;
  forecast: WeatherApiForecast;
  current: WeatherApiCurrent;
  location: WeatherApiLocation;
  isCelsius = true;
}

export default new AppState();
