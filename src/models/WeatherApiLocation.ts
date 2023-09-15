interface WeatherApiLocation {
  lat: number;
  lon: number;
  name: string;
  region: string;
  country: string;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

export default WeatherApiLocation;
