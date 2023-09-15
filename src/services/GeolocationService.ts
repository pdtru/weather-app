class GeolocationService {
  options = {
    maximumAge: 30000,
    timeout: 5000,
    enableHighAccuracy: true,
  };

  getCurrentLocation = async (
    callBack: (position: GeolocationPosition) => void
  ) => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported in this browser.');
    } else {
      navigator.geolocation.getCurrentPosition(
        callBack,
        this.error,
        this.options
      );
    }
  };

  error = (e: any) => {
    console.warn(`ERROR(${e.code}): ${e.message}`);
  };
}

export default new GeolocationService();
