import axios from "axios"
import {useState } from "react"
import Search from "@/components/Search";
import WeatherSearch from "@/components/WeatherSearch";
import Times from "@/components/Times";
import ForecastPanel from "@/components/ForecastPanel";

export default function Home() {
  const [weather, setWeather] = useState({});

  const handleSearch = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHERAPP_KEY}`

    axios.get(url)
    .then((res) => {
      setWeather(res.data)
    })
    .catch((err) => {
      alert("gagal mendapatkan cuaca", err)
    })

  }

    return (
      <div className="relative min-h-screen w-full bg-cover p-4"
        style={{backgroundImage: "url('/weatherbg/weatherbg.jpg')"}}>
        <div className="grid grid-cols-1 md:grid-cols-2 p-6 lg:px-8 lg:py-18">
          <div className="mb-4">
            <Search onSearch={handleSearch}/>
            <WeatherSearch weather={weather} setWeather={setWeather}/>
          </div>
          <div className="flex justify-center md:justify-end">
            <Times weather={weather} setWeather={setWeather}/>
          </div>
        </div>
        <div>
          <ForecastPanel weather={weather} setWeather={setWeather}/>
        </div>
      </div>
  );
}
