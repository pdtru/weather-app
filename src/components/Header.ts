import AppState from '../stores/AppState';
import WeatherApiService from '../services/WeatherApiService';

class Header {
  currentDate = new Date();
  locationInput = document.createElement('input');

  constructor() {
    this.locationInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        this.locationOnSubmit();
      }
    });
  }

  render = () => {
    const container = document.createElement('div');
    container.className = 'header-container';

    this.locationInput.className = 'location-input';
    this.locationInput.value = AppState.location?.name ?? '--';
    this.locationInput.addEventListener('click', this.locationOnClick);
    this.locationInput.addEventListener('blur', this.locationOnBlur);

    const date = document.createElement('div');
    date.className = 'date';
    date.innerText = this.currentDate.toJSON().slice(0, 10);

    const unitToggleButtonConatiner = document.createElement('div');
    unitToggleButtonConatiner.className = 'unit-toggle-button-container';

    const unitToggleButton = document.createElement('label');
    unitToggleButton.className = 'switch';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = !AppState.isCelsius;

    const slider = document.createElement('div');
    slider.className = 'slider';
    slider.onclick = this.buttonOnClick;

    const unit = document.createElement('p');
    unit.innerText = '°' + (AppState.isCelsius ? 'C' : 'F');

    unitToggleButton.append(checkbox, slider);
    unitToggleButtonConatiner.append(unitToggleButton, unit);
    container.append(this.locationInput, date, unitToggleButtonConatiner);

    return container;
  };

  locationOnClick = () => {
    this.locationInput.value = '';
  };

  locationOnBlur = () => {
    this.locationInput.value = AppState.location?.name ?? '--';
  };

  locationOnSubmit = () => {
    WeatherApiService.getCurrentWeather(undefined, this.locationInput.value);
    WeatherApiService.getForecast(undefined, this.locationInput.value);
  };

  buttonOnClick = () => {
    AppState.isCelsius = !AppState.isCelsius;
    AppState.app.render();
  };
}

export default Header;
