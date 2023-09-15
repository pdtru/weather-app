import WeatherApiResponse from '../models/WeatherApiResponse';
import AppState from '../stores/AppState';

class WeatherApiService {
  private apiKey: string = process.env.API_KEY;
  params = {
    key: this.apiKey,
    q: '',
  };

  getCurrentWeather = async (position?: GeolocationPosition, city?: string) => {
    const url: string = 'https://api.weatherapi.com/v1/current.json?';

    if (position) {
      this.params.q = `${position.coords.latitude},${position.coords.longitude}`;
    } else if (city) {
      this.params.q = city;
    }

    const responseJson = await fetch(url + new URLSearchParams(this.params));
    const response: WeatherApiResponse = await responseJson.json();
    AppState.location = response.location;
    AppState.current = response.current;
    AppState.app.render();
  };

  getForecast = async (position?: GeolocationPosition, city?: string) => {
    const url: string = 'https://api.weatherapi.com/v1/forecast.json?';

    if (position) {
      this.params.q = `${position.coords.latitude},${position.coords.longitude}`;
    } else if (city) {
      this.params.q = city;
    }
    const responseJson = await fetch(url + new URLSearchParams(this.params));
    const response: WeatherApiResponse = await responseJson.json();
    AppState.location = response.location;
    AppState.forecast = response.forecast;
    AppState.app.render();
  };
}

export default new WeatherApiService();
