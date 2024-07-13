import { useState } from 'react'
import WeatherDetails from './WeatherDetails';
import { FaSearch } from "react-icons/fa";



function App() {

const api = import.meta.env.VITE_api_key;


//const [icon,setIcon] = useState(profile);
const [temp, setTemp] = useState("0");
const [city, setCity] = useState("City");
const [country, setCountry] = useState("Country");
const [lat, setLat] = useState("0");
const [lon, setLon] = useState("0");
const [humidity, setHumidity] = useState("0");
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
        console.log(api);


    if (data.cod === "404") {
      console.log("city not found");
      setCityNotFound(true);
      setLoading(false);
      setErrt(false);
    }

    setHumidity(data.main.humidity);
    setWind(data.wind.speed);
    setTemp(Math.floor(data.main.temp).toString());
    setCity(data.name);
    setCountry(data.sys.country);
    setLat(data.coord.lat);
    setLon(data.coord.lon);
    setCityNotFound(false);
    setErrt(false);
  } catch (error : any) {
    console.log("Error:", console.error);
    setErr("An Error occured while fetching");
    setErrt(true);
  } finally {
    setLoading(false);
    setErrt(false);
  }
};

const handlecity = (e :any) => {
  setText(e.target.value);
};

function handlekeydown(e : any) {
  if (e.key === "Enter") {
    search();
  }
}

return (
  <>
    <div className="prd-bg">
      <div className=" py-6 block">
        <h1 className="text-blue-700 text-4xl font-bold text-center ">
          Weather Finder
        </h1>
      </div>
      <div className="flex container  text-center py-2 justify-center ">
        <div className="input-container bg-blue-50 w-full md:w-8/12 lg:w-5/12 p-5 pt-12 mx-5 rounded-2xl">
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
            <p className="py-10 font-medium text-lg">Fetching Data ... </p>
          )}

          {cityNotFound && !loading && (
            <p className="py-10 text-xl text-red-600 font-medium">
              City not found . . .
            </p>
          )}

          {errt && !loading && (
            <p className="py-10 text-xl text-red-600 font-medium">{err}</p>
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
            />
          )}
        </div>
      </div>
    </div>
  </>
);



  
}

export default App
