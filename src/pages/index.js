import axios from "axios"
import { useEffect, useState } from "react"
import {FiSearch} from 'react-icons/fi'

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  const handleSearch = (e) => {
    e.preventDefault();

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHERAPP_KEY}`

    axios.get(url)
    .then((res) => {
      setWeather(res.data)
    })
    .catch((err) => {
      console.error("gagal mendapatkan cuaca", err)
    })

    setCity("");
  }

    return (
    <div className="relative h-screen w-full overflow-hidden px-6 py-10">
      <div
        className="absolute inset-0 bg-center bg-cover filter blur-sm brightness-75"
        style={{ backgroundImage: "url('/weatherbg/weatherbg.jpg')" }}
      ></div>

      <div className="container h-full relative mx-auto p-4 w-full rounded-lg overflow-hidden shadow-lg bg-cover justify-center"
          style={{backgroundImage: "url('/weatherbg/weatherbg.jpg')"}}>
        <div className="backdrop-none bg-opacity-30 p-4 rounded-lg shadow-inner">
          <div className="text-slate-800 font-semibold mb-8">
          <form onSubmit={handleSearch} className="flex items-center gap-2 w-full max-w-md">
            <input type="text" 
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="find city"
                className="bg-slate-100 rounded-3xl p-2 mr-2 w-full focus:outline-green-500"
            />
            <button type="submit" className="text-white rounded-3xl py-2 whitespace-nowrap">
              <FiSearch className="text-xl hover:cursor-pointer"/>
            </button>
          </form>
          </div>
          
          <h1 className="text-white sm:text-3xl font-bold mb-2">
            {weather.name || "Loading..."}
          </h1>
          {weather.main && weather.weather && (
            <>
              <p className="text-opacity-90 font-semibold text-white break-words sm:text-3xl">
                {weather.weather[0].main} - {weather.weather[0].description}
              </p>
              <p className="4xl font-semibold mt2 text-white">
                {Math.round(weather.main.temp)}°C
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
