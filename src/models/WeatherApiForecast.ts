interface WeatherApiForecast {
  forecastday: [
    {
      day: {
        maxtemp_c: number;
        maxtemp_f: number;
        mintemp_c: number;
        mintemp_f: number;
      };
    }
  ];
}

export default WeatherApiForecast;
