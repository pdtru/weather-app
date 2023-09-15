import * as _ from 'lodash';
import '/styles.css';
import favicon from './assets/favicon.png';
import WeatherApiService from './services/WeatherApiService';
import GeolocationService from './services/GeolocationService';
import App from './components/App';
import AppState from './stores/AppState';

function setFavicons(favImg: string) {
  let headTitle = document.querySelector('head');
  let setFavicon = document.createElement('link');
  setFavicon.setAttribute('rel', 'shortcut icon');
  setFavicon.setAttribute('href', favImg);
  headTitle.appendChild(setFavicon);
}
setFavicons(favicon);

GeolocationService.getCurrentLocation(WeatherApiService.getCurrentWeather);
GeolocationService.getCurrentLocation(WeatherApiService.getForecast);

AppState.app = new App();
AppState.app.render();
