/****************************************************************************
**
**
**
**
****************************************************************************/
import React, { useState } from 'react';
import { saveUserToLocalStorage, fetchWeather } from '../../utils/api';
import WeatherModal from '../modals/WeatherModal';
import { useEffect } from 'react';
import MapComponent from '../modals/MapComponent';
import WeatherInfo from '../WeatherInfo';

const UserCard = (props) => {
    const { user } = props
    const [weather, setWeather] = useState(null);
    const [isWeatherModalOpen, setIsWeatherModalOpen] = useState(false);
    const [isMapModalOpen, setIsMapModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [saveStatus, setSaveStatus] = useState(false);

    const getUserWeather = () => {
        fetchWeather(user.location.coordinates.latitude, user.location.coordinates.longitude)
            .then(data => {
                setLoading(false);
                setWeather(data)
                //console.log(data)
            }).catch(error => {
                console.error('Error fetching users:', error);
                setLoading(false);
            });
    };

    useEffect(() => {
        getUserWeather();
        const intervalId = setInterval(getUserWeather, 5 * 60 * 1000);
        return () => clearInterval(intervalId);
    }, [user]);

    const handleSave = () => {
        saveUserToLocalStorage(user);
        setSaveStatus(!saveStatus)
    };

    const handleWeather = () => {
        setIsWeatherModalOpen(true);
    };
    const handleMap = () => {
        setIsMapModalOpen(true);
    };

    return (
        <div className="bg-gray-400 rounded-3xl shadow-2xl p-4 mb-4">
            <div className='flex flex-wrap mb-5'>
                <img src={user.picture.large} alt="Profile" className=" w-13 border rounded-full mr-1 " />
                <div>
                    <div className='flex mb-3'>
                        <p className="font-bold mr-1">{user.name.first} {user.name.last}</p>
                        <svg onClick={handleMap} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-6 h-6 cursor-pointer rounded hover:bg-gray-700 pointer-events ">
                            <path strokeLinecap="round" fill="red" strokeLinejoin=" round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            <path strokeLinecap="round" fill="white" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <p className="text-gray-700 ml-6 text-sm mb-1">{user.gender}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-5 h-5 absolute">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
                    </svg>
                    <p className="text-gray-700 ml-6  text-xs mb-1">{user.location.city}, {user.location.country}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <p className="text-gray-700 ml-6 text-xs w-70%">{user.email}</p>
                </div>
            </div >

            <p className="font-semibold text-gray-600">Weather:</p>
            <div className="shadow-2xl p-1 rounded-2xl bg-gray-400">
                <WeatherInfo weather={weather} fullView={false} />
            </div>
            <div className="flex justify-between mt-3">
                {!props.saved &&
                    <button onClick={handleSave} className={`bg-gray-300 text-green-700 hover:bg-green-200 font-bold  py-2 px-4 rounded-2xl`} >
                        {saveStatus ? 'Saved' : 'Save'}
                    </button>
                }
                <button onClick={handleWeather} className=" shadow-xl bg-gray-300 hover:bg-blue-300 text-blue-900 font-bold py-3 px-6 rounded-2xl">
                    Weather
                </button>
            </div>
            {/* Modal for displaying weather */}
            <WeatherModal isOpen={isWeatherModalOpen} onClose={() => setIsWeatherModalOpen(false)} weather={weather} />
            <MapComponent isOpen={isMapModalOpen} onClose={() => setIsMapModalOpen(false)} userLocation={user.location.coordinates} userProfileImage={user.picture.large} />
        </div >
    );
};

export default UserCard;