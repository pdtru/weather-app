import AppState from '../stores/AppState';

class Content {
  render = () => {
    const container = document.createElement('div');
    container.className = 'content-container';

    const temperatureContainer = document.createElement('div');
    temperatureContainer.className = 'temperature-container';

    const temperature = document.createElement('div');
    temperature.className = 'temperature';

    if (AppState.current) {
      temperature.innerText =
        (AppState.isCelsius
          ? AppState.current.temp_c.toString()
          : AppState.current.temp_f.toString()) + '°';
    } else {
      temperature.innerText = '--';
    }

    const forecast = document.createElement('div');
    forecast.className = 'forecast';

    const high = document.createElement('div');
    const low = document.createElement('div');

    if (AppState.current) {
      high.innerText =
        (AppState.isCelsius
          ? 'High: ' +
            AppState.forecast?.forecastday[0].day.maxtemp_c.toString()
          : 'High: ' +
            AppState.forecast?.forecastday[0].day.maxtemp_f.toString()) + '°';
      low.innerText =
        (AppState.isCelsius
          ? 'Low: ' + AppState.forecast?.forecastday[0].day.mintemp_c.toString()
          : 'Low: ' +
            AppState.forecast?.forecastday[0].day.mintemp_f.toString()) + '°';
    } else {
      high.innerText = '--';
      low.innerText = '--';
    }

    forecast.append(high, low);

    temperatureContainer.append(temperature, forecast);

    const conditionContainer = document.createElement('div');
    conditionContainer.className = 'condition-container';

    const condition = document.createElement('div');
    condition.className = 'condition';
    condition.innerText = AppState.current?.condition.text
      ? AppState.current.condition.text
      : '--';

    const conditionIcon = document.createElement('img');
    conditionIcon.src = AppState.current?.condition.icon;
    conditionIcon.className = 'condition-icon';

    conditionContainer.append(condition, conditionIcon);

    const lastUpdatedContainer = document.createElement('div');
    lastUpdatedContainer.className = 'last-updated-container';

    const lastUpdated = document.createElement('p');
    lastUpdated.className = 'last-updated';
    lastUpdated.innerText = AppState.current?.last_updated
      ? 'Last updated: ' + AppState.current.last_updated
      : '--';

    const linkBack = document.createElement('a');
    linkBack.className = 'link-back';
    linkBack.href = 'https://www.weatherapi.com/';
    linkBack.title = 'Free Weather API';

    const linkBackImg = document.createElement('img');
    linkBackImg.className = 'link-back-img';
    linkBackImg.src = '//cdn.weatherapi.com/v4/images/weatherapi_logo.png'
      ? '//cdn.weatherapi.com/v4/images/weatherapi_logo.png'
      : '';
    linkBackImg.alt = 'Weather data by WeatherAPI.com';

    linkBack.append(linkBackImg);

    lastUpdatedContainer.append(lastUpdated);

    container.append(
      temperatureContainer,
      conditionContainer,
      lastUpdatedContainer,
      linkBack
    );

    return container;
  };
}

export default Content;
