/****************************************************************************
**
**
**
**
****************************************************************************/
import React from 'react'
import { getWeatherIcon } from '../utils/util';

const WeatherInfo = ({ weather, fullView }) => {
    if (!weather) return null;
    const { current_weather, hourly } = weather;
    if (!current_weather || !hourly) {
        return <div>No weather data available</div>;
    }
    const { icon, status, description } = getWeatherIcon(current_weather.weathercode);
    return (
        <div className="grid grid-cols-12 gap-4 mb-2 p-2">
            <div className="col-span-12 sm:col-span-8 ">
                <div className="p-4 relative bg-blue-950 border border-gray-800 shadow-lg rounded-3xl">
                    <p className="h-14 w-14 text-5xl absolute top-5 right-3 text-green-400">{icon || ''}</p>
                    <p className="text-2xl text-gray-100 font-medium leading-8 mt-5">{current_weather?.temperature}°C</p>
                    < p className="text-lg text-gray-300">{status}</p>
                    <p className="text-sm text-gray-400">{description}`</p>
                </div>
            </div>
            <div className="col-span-12 sm:col-span-4">
                <div className="p-2 relative bg-blue-950 border border-gray-800 shadow-lg flex flex-col justify-center items-center rounded-2xl">
                    <span className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                        </svg>
                        <p className="text-sm text-gray-400 font-medium ">Max</p>
                    </span>
                    <p className="text-lg text-gray-100 font-medium "> {Math.max(...hourly.temperature_2m)}°C</p>
                </div>
                <div className="p-2 relative bg-blue-950 border border-gray-800 shadow-lg flex flex-col justify-center items-center rounded-2xl mt-1">
                    <span className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                        </svg>
                        <p className="text-sm text-gray-400 font-medium ">Min</p>
                    </span>
                    <p className="text-lg text-gray-100 font-medium "> {Math.min(...hourly.temperature_2m)}°C</p>
                </div>
            </div>
            {
                fullView && (
                    <>
                        <div className="col-span-12 sm:col-span-5">
                            <div className="p-2 relative bg-blue-950 border border-gray-800 shadow-lg flex   justify-evenly items-center rounded-2xl">
                                <p className="text-sm text-gray-400 font-medium ">Wind Speed</p>
                                <p className="text-lg text-gray-100 font-medium ">  {current_weather.windspeed} km/h</p>
                            </div>
                            <div className="p-2 relative bg-blue-950 border border-gray-800 shadow-lg flex justify-evenly items-center rounded-2xl mt-1">
                                <p className="text-sm text-gray-400 font-medium ">Wind Direction</p>
                                <p className="text-lg text-gray-100 font-medium ">  {current_weather.winddirection}°</p>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-5">
                            <div className="p-5 relative bg-blue-950 border border-gray-800 shadow-lg flex flex-col justify-center items-center rounded-2xl mt-1">
                                <p className="text-sm text-gray-400 font-medium ">Time of Observation</p>
                                <p className="text-lg text-gray-100 font-medium "> {current_weather.time}</p>
                            </div>
                        </div>
                    </>
                )
            }
        </div >
    )
}

export default WeatherInfo