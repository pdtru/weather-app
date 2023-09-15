interface WeatherApiCurrent {
  temp_c: number;
  temp_f: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  last_updated: string;
}

export default WeatherApiCurrent;
