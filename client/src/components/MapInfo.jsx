import React, { useState } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
function MapInfo(props) {
  const [location, setLocation] = useState([]);
  let myMap = {};

  const geocode = (ymaps) => {
    ymaps.geocode(props.address).then((result) => {
      let coord = result.geoObjects.get(0).geometry.getCoordinates();
      myMap.setCenter(coord, 10, {
        checkZoomRange: false,
      });
      setLocation(coord);
    });
  };

  const pointOptions = () => {
    return {
      preset: 'islands#redDotIcon',
    };
  };

  return (
    <>
      <h5 style={{ paddingBottom: '1rem' }}>
        <strong>Где находится</strong>
      </h5>
      <div style={{ width: '100%' }}>
        <YMaps
          query={{
            apikey: process.env.REACT_APP_MAP_KEY,
            lang: 'ru_RU',
            load: 'package.full',
          }}
        >
          <Map
            onLoad={(ymaps) => geocode(ymaps)}
            width={'100%'}
            height={'40vh'}
            defaultState={{
              center: [55.75, 37.57],
              zoom: 9,
              controls: ['zoomControl', 'fullscreenControl'],
            }}
            instanceRef={(ref) => (myMap = ref)}
          >
            <Placemark geometry={location} options={pointOptions()} />
          </Map>
        </YMaps>
      </div>
    </>
  );
}

export default MapInfo;
