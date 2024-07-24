import { MdOutlineWaterDrop } from "react-icons/md";
import { WiCloudyWindy } from "react-icons/wi";


interface WeatherDetailsProps {
  temp: any;
  city: any;
  country: any;
  lat: any;
  lon: any;
  humidity: any;
  wind: any;
  weatherdes: any;
  weather: any;
  maxtemp: any;
  mintemp: any;
  pressure: any;
  sealevel: any;
  grndlevel: any;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({
  temp,
  city,
  country,
  lat,
  lon,
  humidity,
  wind,
  weatherdes,
  weather,
  maxtemp,
  mintemp,
  pressure,
  sealevel,
  grndlevel,
}) => {
  return (
    <div className="py-6">
      <img
        src="/weather.jpg"
        alt=""
        className="w-6/12 md:w-4/12 mx-auto rounded-md"
      />
      <div className="flex flex-col justify-center items-center my-6">
        <div className="py-4 text-green-600 font-bold text-2xl">
          City : {city}
        </div>
        <div className=" text-xl font-semibold tracking-wide ">
          Temparature : <span className="text-blue-600"> {temp} °C</span>
        </div>

        <div className="pt-4 text-xl tracking-wide font-semibold">
          <span className="">Weather : </span>{" "}
          <span className="text-blue-600">{weather}</span>
        </div>
        <div className="pt-4 text-xl tracking-wide font-semibold">
          <span className=""> Description : </span>{" "}
          <span className="text-blue-600">{weatherdes}</span>
        </div>

        <div className="pt-4 text-xl tracking-wide  text-green-600">
          <span className="font-medium">Country Code : </span> {country}
        </div>
      </div>

      <div className=" flex justify-around py-8 text-lg font-medium">
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-blue-600">Latitude</span>
          <span>{lat}°</span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-semibold text-blue-600">Longitude</span>
          <span>{lon}°</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-6">
        <div className="pt-4 text-xl tracking-wide">
          <span className="font-medium">Max Temparature : </span> {maxtemp} °C
        </div>
        <div className="pt-4 text-xl tracking-wide">
          <span className="font-medium">Min Temparature : </span> {mintemp} °C
        </div>
      </div>

      <div className="flex justify-between py-4 text-lg font-medium mx-4 md:mx-10">
        <div className="flex flex-col justify-between items-center">
          <MdOutlineWaterDrop
            className="text-blue-500 mx-auto my-2"
            fontSize={40}
          />
          <span>{humidity} %</span>
          <span className="font-semibold text-blue-600">Humidity</span>
        </div>

        <div className="flex flex-col justify-between items-center">
          <WiCloudyWindy className="text-blue-500 mx-auto my-2" fontSize={50} />
          <span>{wind} Km/hr</span>
          <span className="font-semibold text-blue-600">Windspeed</span>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center my-6">
        <div className="pt-4 text-xl tracking-wide">
          <span className="font-semibold">Atmospheric pressure : </span>
          {pressure} hPa
        </div>

        <div className="pt-4 text-xl tracking-wide">
          <span className="font-semibold">Ground level pressure : </span>
          {grndlevel} hPa
        </div>
        <div className="pt-4 text-xl tracking-wide">
          <span className="font-semibold">Sea level pressure : </span>{" "}
          {sealevel} hPa
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
