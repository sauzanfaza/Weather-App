export default function WeatherSearch({weather, setWeather}) {
    return (
        <div>
            <h1 className="text-white text-3xl md:text-4xl ml-4 font-bold mb-2">
            {weather.name || "Loading..."}
          </h1>
          {weather.main && weather.weather && (
            <>
              <p className="text-opacity-90 font-semibold text-white break-words text-3xl ml-4">
                {weather.weather[0].main} - {weather.weather[0].description}
              </p>
              <p className="text-xl ml-4 font-semibold mt2 text-white">
                {Math.round(weather.main.temp)}°C
              </p>
            </>
          )}
        </div>
    )
}