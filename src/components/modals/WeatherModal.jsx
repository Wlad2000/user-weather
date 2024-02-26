/****************************************************************************
**
**
**
**
****************************************************************************/

import Modal from '../../items/Modal';
import React from 'react';
import WeatherInfo from '../WeatherInfo';

const WeatherModal = (props) => {
    if (!props.isOpen) return null;
    return (
        <Modal width='90%' height='70%'{...props} >
            <h2 className="text-2xl font-bold mb-4">Weather Details</h2>
            <WeatherInfo height='90%' weather={props.weather} fullView={true} />
        </Modal >
    );
};

export default WeatherModal;
