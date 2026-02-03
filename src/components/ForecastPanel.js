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
        <div className="fixed bottom-0 left-0 mt-4 h-32 lg:h-96 md:h-60 w-full text-white flex flex-col bg-white/10 backdrop-blur-xl shadow-md overflow-y-auto overscroll-contain z-50 p-4 lg:p-6">
            <div className="text-[12px] md:p-2 md:text-lg">
                <h1>Today's Forecast</h1>
            </div>
            <hr className="border-t border-white/30"></hr>
            <div className="grid grid-cols-2 py-4 p-2 text-[10px]">
                <div className="flex text-left gap-1">
                    <IoIosCloud className="text-[14px]" />
                    <span>Humidity </span>
                    <span>{weather.main ? `${weather.main?.humidity}%` : ""}</span>
                </div>

                <div className="flex text-left gap-1">
                    <FaTemperatureHigh className="text-[14px]" />
                    <span>Pressure</span>
                    <span>{weather.main ? `${weather.main?.pressure} hPa` : ""}</span>
                </div>
            </div>
            <div className="grid grid-cols-2 py-4 p-2 text-[10px]">
                <div className="flex text-left gap-1">
                    <FaEye className="text-[14px]"/>
                    <span>Visibility </span>
                    <span>{weather.visibility ? `${weather.visibility / 1000} km` : ""}</span>
                </div>

                <div className="flex text-left gap-1">
                    <FaWind className="text-[14px]" />
                    <span>{weather.wind ? `${weather.wind.speed} m/s` : ""}</span>
                </div>
            </div>
            <div className="grid grid-cols-2 py-4 p-2 text-[10px]">
                <div className="flex text-left gap-1">
                    <LiaTemperatureHighSolid className="text-[14px]" />
                    <span>Max Temp </span>
                    <span>{weather.main ? `${(weather.main.temp_max - 273.14).toFixed(1)}°C` : ""}</span>
                </div>

                <div className="flex text-left gap-1">
                    <IoRainy className="text-[14px]" />
                    <span>{weather.rain?.["1h"]
                        ? `${weather.rain["1h"]} mm`
                    : "No Rain"}</span>
                </div>
            </div>
        </div>
        </>
    )
}