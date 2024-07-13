import { IoWater } from "react-icons/io5";
import { WiCloudyWindy } from "react-icons/wi";


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
      <img
        src="/weather.jpg"
        alt=""
        className="w-6/12 md:w-4/12 mx-auto rounded-xl"
      />

      <div className="pt-10 text-2xl font-bold">{temp} °C</div>
      <div className="pt-4 text-green-600 font-bold text-4xl">{city}</div>
      <div className="pt-4 text-2xl tracking-wide">{country}</div>

      <div className="coord flex justify-center py-4 text-lg font-medium">
        <div className="flex flex-col px-2">
          <span className="font-bold">Latitude</span>
          <span>{lat}</span>
        </div>

        <div className="flex flex-col px-2">
          <span className="font-bold">Longitude</span>
          <span>{lon}</span>
        </div>
      </div>

      <div className="flex justify-between py-4 text-lg font-medium mx-4 md:mx-10">
        <div className="flex flex-col justify-between">
          <IoWater className="text-blue-500 mx-auto my-2" fontSize={40} />
          <span>{humidity} %</span>
          <span className="font-bold">Humidity</span>
        </div>

        <div className="flex flex-col justify-between">
          <WiCloudyWindy className="text-blue-500 mx-auto my-2" fontSize={50} />
          <span>{wind} Km/hr</span>
          <span className="font-bold">Windspeed</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
