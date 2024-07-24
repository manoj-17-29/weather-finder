import { useState } from "react";
import WeatherDetails from "./WeatherDetails";
import { FaSearch } from "react-icons/fa";

function App() {
  const api = import.meta.env.VITE_api_key;

  //const [icon,setIcon] = useState(profile);
  const [temp, setTemp] = useState("0");
  const [maxtemp, setMaxTemp] = useState("0");
  const [mintemp, setMinTemp] = useState("0");
  const [city, setCity] = useState("City");
  const [country, setCountry] = useState("Country");
  const [weather, setWeather] = useState("weather");
  const [weatherdes, setWeatherDes] = useState("description");
  const [lat, setLat] = useState("0");
  const [lon, setLon] = useState("0");
  const [humidity, setHumidity] = useState("0");
  const [pressure, setPressure] = useState("0");
  const [sealevel, setSeaLevel] = useState("0");
  const [grndlevel, setGrdLevel] = useState("0");
  const [wind, setWind] = useState("0");
  const [text, setText] = useState("");
  const [err, setErr] = useState("");
  const [errt, setErrt] = useState(false);
  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const search = async () => {
    setLoading(true);

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api}&units=Metric`;

    try {
      let res = await fetch(url);
      let data = await res.json();
      // console.log(data);
      console.log(data);

      if (data.cod === "404") {
        console.log("city not found");
        setCityNotFound(true);
        setLoading(false);
        setErrt(false);
      }

      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setTemp(Math.floor(data.main.temp).toString());
      setMaxTemp(Math.floor(data.main.temp_max).toString());
      setMinTemp(Math.floor(data.main.temp_min).toString());
      setCity(data.name);
      setCountry(data.sys.country);
      setLat(data.coord.lat);
      setLon(data.coord.lon);
      setCityNotFound(false);
      setWeather(data.weather[0].main);
      setWeatherDes(data.weather[0].description);
      setPressure(data.main.pressure);
      setSeaLevel(data.main.sea_level);
      setGrdLevel(data.main.grnd_level);

      setErrt(false);
    } catch (error: any) {
      console.log("Error:", console.error);
      setErr("An Error occured while fetching");
      setErrt(true);
    } finally {
      setLoading(false);
      setErrt(false);
    }
  };

  const handlecity = (e: any) => {
    setText(e.target.value);
  };

  function handlekeydown(e: any) {
    if (e.key === "Enter") {
      search();
    }
  }

  return (
    <>
      <div className="flex justify-center items-center h-dvh">
        <div
          id="style-7"
          className="w-11/12 md:w-8/12 lg:w-5/12 bg-blue-100 rounded-xl px-3 py-4 h-[85vh] lg:h-[90vh] overflow-y-auto"
        >
          <div className="">
            <h1 className="text-blue-700 text-2xl font-bold text-start my-3 ms-2 tracking-wide">
              Weather Finder :
            </h1>

            <div className="bg-white rounded-lg py-2 w-full  px-2 ps-3 flex items-center border-2 ">
              <input
                type="text"
                className="border-none outline-none w-full text-blue-600"
                onChange={handlecity}
                value={text}
                onKeyDown={handlekeydown}
                placeholder="Enter a city name"
              />
              <div className="bg-slate-200 px-2 py-1 rounded-lg flex justify-center items-center gap-2">
                <FaSearch onClick={() => search()} />
                <button onClick={() => search()}>search</button>
              </div>
            </div>

            {loading && (
              <p className="py-10 text-center my-12 font-medium text-lg">
                Fetching Data ...{" "}
              </p>
            )}

            {cityNotFound && !loading && (
              <p className="py-10 text-center my-12  text-xl text-red-600 font-medium">
                City not found . . .
              </p>
            )}

            {errt && !loading && (
              <p className="py-10 text-center my-12  text-xl text-red-600 font-medium">
                {err}
              </p>
            )}

            {!cityNotFound && !loading && !errt && (
              <WeatherDetails
                temp={temp}
                city={city}
                country={country}
                lat={lat}
                lon={lon}
                humidity={humidity}
                wind={wind}
                weather={weather}
                weatherdes={weatherdes}
                maxtemp={maxtemp}
                mintemp={mintemp}
                pressure={pressure}
                sealevel={sealevel}
                grndlevel={grndlevel}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
