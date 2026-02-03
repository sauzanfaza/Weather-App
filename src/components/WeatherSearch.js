export default function WeatherSearch({weather, setWeather}) {  
  return (
<div className="
  relative
  min-w-60 md:min-w-80 xl:w-[400px]
  min-h-20 md:min-h-40 xl:min-h-48
  rounded-xl
  text-white
  flex flex-col
  bg-white/10 backdrop-blur-xl
  shadow-md
  p-2 lg:p-6
  text-center
  md:text-left
">
<h1 className="text-white text-lg lg:text-3xl md:text-4xl ml-4 font-bold mb-2">
            {weather.name || "Loading..."}
          </h1>
          {weather.main && weather.weather && (
            <>
              <p className="text-opacity-90 font-semibold text-white break-words lg:text-3xl ml-4">
                {weather.weather[0].main} - {weather.weather[0].description}
              </p>
              <p className="text-xl ml-4 font-semibold mt-1 mb-2 text-white">
                {Math.round(weather.main.temp)}°C
              </p>
            </>
          )}
        </div>
    )
}