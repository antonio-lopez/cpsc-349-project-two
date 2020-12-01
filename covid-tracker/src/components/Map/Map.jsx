import React, { useState, useEffect } from 'react';
import { fetchMapData } from '../../api';
import {MapContainer, TileLayer, Popup, Circle } from "react-leaflet";
// import { showDataOnMap } from "./util";
import styles from './Map.module.css';
import 'leaflet/dist/leaflet.css';

//styling for Circles
const circleStyle = {
    cases: {
      hex: "#CC1034",
      multiplier: 800,
    },
    recovered: {
      hex: "#7dd71d",
    
      multiplier: 1200,
    },
    deaths: {
      hex: "#fb4443",
      multiplier: 2000,
    },
  };

const Map = () => {
    const [mapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
    const [mapZoom] = useState(3);
    const [countryMapData, setCountryMapData] = useState({});

    useEffect(() => {
        const fetchMyAPI = async () => {
            const initialCountryMapData = await fetchMapData();
            setCountryMapData(initialCountryMapData);
        };

        fetchMyAPI();
    }, []);

    // console.log(countryMapData);

    // create an array from the CountryData object
    const mapData = Object.values(countryMapData);
    // console.log(mapData);

  return (
    <div className={styles.map}>
        <MapContainer className={styles.leafletcontainer} center={mapCenter} zoom={mapZoom} scrollWheelZoom={true}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* loop through countries and display a marker on the map*/}
            {mapData.map((country) => (
                <Circle key={country.country}
                    center={[country.countryLat, country.countryLong]}
                    color={circleStyle.cases.hex}
                    fillColor={circleStyle.cases.hex}
                    fillOpacity={0.4}
                    radius={
                        Math.sqrt((country.cases) * 0.09) * circleStyle.cases.multiplier
                    }
                >
                    <Popup>
                        I'm a pop-up, waddup?
                    </Popup>
                </Circle>
            ))}
        </MapContainer>
    </div>
  );
}

export default Map;