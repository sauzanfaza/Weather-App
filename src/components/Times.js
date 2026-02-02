import { useState, useEffect } from "react"

export default function Times({weather, setWeather}) {
const [time, setTime] = useState(new Date())
const formattedDate = time.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
})

const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
})

  useEffect(() => {
    const interval = setInterval(() => { //jalanin kode berulang ulang
      setTime(new Date()) //update state ke waktu yang baru
    }, 1000) //setiap satu detik

    return () => clearInterval(interval) //cleanup function (utk berhentiin setinterval pas pindah hal misalnya biar dia gak ttp jalan di belakang)
  }, [])//jalan sekali pas hal nya kebuka

    return(
        <>
        <div className="relative h-24 md:h-32 min-w-60 lg:h-48 lg:w-80 xl:h-48 xl:w-[400px] rounded-xl text-white flex flex-col bg-white/0 backdrop-blur-xl shadow-md focus:outline-none p-4 lg:p-6">
            <h1 className="text-lg md:text-2xl lg:text-5xl mb-1 text-center md:text-right">{formattedTime}</h1>
            <p className="text-center md:text-right  md:mt-2 text-[10px] lg:text-xl">{formattedDate}</p>
            <p className="text-center md:text-right text-[10px] lg:text-xl md:text-md md:mt-2">Jakarta, Indonesia</p>
            {/* city sama country manual dulu wkwkw */}
        </div>
        </>
    )
}