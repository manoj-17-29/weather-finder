interface WeatherDetailsProps {
  temp: any;
  city: any;
  country: any;
  lat: any;
  lon: any;
  humidity: any;
  wind: any;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({
  temp,
  city,
  country,
  lat,
  lon,
  humidity,
  wind,
}) => {
  return (
    <div className="py-10">
      <img src="/weather.jpg" alt="" className="w-4/12 mx-auto rounded-xl" />

      <div className="pt-10 text-2xl font-bold">{temp} °C</div>
      <div className="pt-4 text-green-600 font-bold text-4xl">{city}</div>
      <div className="pt-4 text-2xl tracking-wide">{country}</div>

      <div className="coord flex justify-center py-4 text-lg font-medium">
        <div className="flex flex-col px-2">
          <span>Latitude</span>
          <span>{lat}</span>
        </div>

        <div className="flex flex-col px-2">
          <span>Longitude</span>
          <span>{lon}</span>
        </div>
      </div>

      <div className="flex justify-between py-4 text-lg font-medium mx-12">
        <div className="flex flex-col">
          <i className="fa-solid fa-water text-4xl py-4 text-blue-500"></i>
          <span>{humidity} %</span>
          <span>Humidity</span>
        </div>

        <div className="flex flex-col">
          <i className="fa-solid fa-wind text-4xl py-5 text-blue-500"></i>
          <span>{wind} Km/hr</span>
          <span>Windspeed</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
