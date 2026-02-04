import { IoIosCloud } from "react-icons/io";
import { FaTemperatureHigh } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import { FaWind } from "react-icons/fa6";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { IoRainy } from "react-icons/io5";

export default function ForecastPanel({weather}) {
      console.log("FORECAST PANEL WEATHER:", weather);

    return(
        <>
        <div className="fixed bottom-0 left-0 mt-4 h-72 lg:h-70 w-full text-white flex flex-col bg-white/10 backdrop-blur-xl shadow-md overflow-y-auto overscroll-contain z-50 p-4 lg:p-6">
            <div className="md:p-2 text-xl">
                <h1>Today's Forecast</h1>
            </div>
            <hr className="border-t border-white/30"></hr>
            <div className="grid grid-cols-2 lg:p-10 p-6 text-[14px] lg:text-2xl">
                <div className="flex text-left gap-1">
                    <IoIosCloud className="text-[18px] md:text-[20px] lg:text-4xl" />
                    <span>Humidity </span>
                    <span>{weather.main ? `${weather.main?.humidity}%` : ""}</span>
                </div>

                <div className="flex text-left gap-1">
                    <FaTemperatureHigh className="text-[18px] md:text-[20px] lg:text-4xl" />
                    <span>Pressure</span>
                    <span>{weather.main ? `${weather.main?.pressure} hPa` : ""}</span>
                </div>
            </div>
            <div className="grid grid-cols-2 lg:p-10 p-6 text-[14px] lg:text-2xl">
                <div className="flex text-left gap-1">
                    <FaEye className="text-[18px] md:text-[20px] lg:text-4xl"/>
                    <span>Visibility </span>
                    <span>{weather.visibility ? `${weather.visibility / 1000} km` : ""}</span>
                </div>

                <div className="flex text-left gap-1">
                    <FaWind className="text-[18px] md:text-[20px] lg:text-4xl" />
                    <span>Wind</span>
                    <span>{weather.wind ? `${weather.wind.speed} m/s` : ""}</span>
                </div>
            </div>
            <div className="grid grid-cols-2 lg:p-10 p-6 text-[14px] lg:text-2xl">
                <div className="flex text-left gap-1">
                    <LiaTemperatureHighSolid className="text-[18px] md:text-[20px] lg:text-4xl" />
                    <span>Max Temp </span>
                    <span>{weather.main ? `${(weather.main.temp_max - 273.14).toFixed(1)}°C` : ""}</span>
                </div>

                <div className="flex text-left gap-1">
                    <IoRainy className="text-[18px] md:text-[20px] lg:text-4xl" />
                    <span>{weather.rain?.["1h"]
                        ? `${weather.rain["1h"]} mm`
                    : "No Rain"}</span>
                </div>
            </div>
        </div>
        </>
    )
}