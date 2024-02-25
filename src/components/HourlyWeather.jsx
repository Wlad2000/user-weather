/****************************************************************************
**
**
**
**
****************************************************************************/
import React from 'react';

const HourlyWeather = ({ hourlyWeather }) => {

    if (!hourlyWeather || !hourlyWeather.time || !hourlyWeather.temperature_2m) {
        return <div>No hourly weather data available</div>;
    }

    const todayDate = new Date().toISOString().slice(0, 10);
    // Filter hourly weather data for today
    const todayHourlyWeather = hourlyWeather.time.reduce((acc, time, index) => {
        if (time.startsWith(todayDate)) {
            acc.time.push(time);
            acc.temperature_2m.push(hourlyWeather.temperature_2m[index]);
        }
        return acc;
    }, { time: [], temperature_2m: [] });

    return (
        <div className="bg-gray-200 rounded-lg drop-shadow-2xl p-4 rounded-xl">
            <h2 className="text-xl text-gray-600 font-semibold mb-4">Today Hourly Weather Forecast</h2>
            <div className='bg-gray-300'>
                <div className="overflow-x-auto bg-gray-300 p-4 ml-20 rounded">
                    <table className="min-w-full">
                        <thead >
                            <tr>
                                <th className="px-5 py-2 text-xl absolute left-4 bg-gray-300 ">Time</th>
                                {todayHourlyWeather.time.map((time, index) => (
                                    <th key={index} className="px-2 py-1.5 text-xl">{time.slice(11, 16)}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className=''>
                            <tr className=''>
                                <td className="px-4 py-2 text-xl font-bold absolute left-4 bg-gray-300 border-t-2 ">Temp</td>
                                {todayHourlyWeather.temperature_2m.map((temp, index) => (
                                    <td key={index} className={`border-t-2 px-2 py-2 ${index % 2 === 0 ? "bg-gray-100" : ""}`}>{temp}°C</td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div >
            </div >
        </div >


    );
};

export default HourlyWeather;

