/****************************************************************************
**
**
**
**
****************************************************************************/
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import Modal from '../../items/Modal';

const MapComponent = (props) => {
    const position = [props.userLocation.latitude, props.userLocation.longitude];

    //custom icon for the marker
    const customIcon = L.icon({
        iconUrl: props.userProfileImage,
        iconSize: [55, 55],
        iconAnchor: [20, 70],
        popupAnchor: [0, -40],
    });

    return (
        <Modal width='70%' height='70%' {...props}>
            <h2 className="text-2xl font-semibold mb-4">Map Details</h2>
            <MapContainer style={{
                width: '100%', height: '88%'
            }} center={position} zoom={13} scrollWheelZoom={false} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={customIcon} >
                    < Popup >
                        position: {position} <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer >
        </Modal >
    );
};

export default MapComponent;
