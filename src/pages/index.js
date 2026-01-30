import axios from "axios"
import {useState } from "react"
import Search from "@/components/search";
import WeatherSearch from "@/components/WeatherSearch";

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
      <div className="relative h-screen w-full bg-cover overflow-hidden"
        style={{backgroundImage: "url('/weatherbg/weatherbg.jpg')"}}>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div>
        <Search onSearch={handleSearch}/>
        <WeatherSearch weather={weather} setWeather={setWeather}/>
        </div>
        <div>
          2
        </div>
      </div>
      </div>
  );
}
