/****************************************************************************
**
**
**
**
****************************************************************************/

import Modal from '../../items/Modal';
import { getWeatherIcon } from '../../utils/util';
import HourlyWeather from '../HourlyWeather';
import React from 'react';
import WeatherInfo from '../WeatherInfo';

const WeatherModal = (props) => {
    if (!props.isOpen) return null;
    const { current_weather, hourly } = props.weather;
    console.log(props.weather)
    return (
        <Modal width='90%' {...props}>
            <h2 className="text-2xl font-bold mb-4">Weather Details</h2>
            <WeatherInfo weather={props.weather} fullView={true} />
            <HourlyWeather hourlyWeather={hourly} />
        </Modal >
    );
};

export default WeatherModal;
