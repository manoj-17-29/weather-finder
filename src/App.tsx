import { useState } from 'react'
import WeatherDetails from './WeatherDetails';



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
      <div className=" py-10 block">
        <h1 className="text-blue-700 text-4xl font-bold text-center ">
          Weather
        </h1>
      </div>
      <div className="flex container  text-center py-8 justify-center ">
        <div className="input-container bg-blue-50 w-full md:w-8/12 lg:w-4/12 p-5 pt-12 mx-5 rounded-2xl">
          <div className="bg-white rounded-lg py-2 w-11/12 md:w-10/12 lg:w-9/12 px-4 flex mx-auto items-center border-2 ">
            <input
              type="text"
              className="border-none outline-none w-full text-blue-600"
              onChange={handlecity}
              value={text}
              onKeyDown={handlekeydown}
              placeholder="Enter a city"
            />
            <i
              className="fa-solid fa-magnifying-glass text-blue-700 "
              onClick={() => search()}
            ></i>
          </div>

          {loading && (
            <p className="py-10 font-medium text-lg">please wait ... </p>
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
