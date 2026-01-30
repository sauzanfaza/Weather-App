import { useState } from "react";
import {FiSearch} from 'react-icons/fi'


export default function Search({onSearch}) {
    const [city, setCity] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        onSearch(city)

        setCity("")       
    }

    return(
        <div className="text-slate-800 font-semibold mb-8">
          <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full max-w-md">
            <input type="text" 
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="find city"
                className="bg-slate-100  rounded-3xl md:rounded-4xl p-2 md:px-6 md:py-4 mr-2 w-full focus:outline-green-500"
            />
            <button type="submit" className="text-white rounded-3xl py-2 whitespace-nowrap">
              <FiSearch className="text-xl md:text-4xl hover:cursor-pointer"/>
            </button>
          </form>
        </div>
    )
}