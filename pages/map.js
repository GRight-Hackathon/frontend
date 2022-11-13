import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

import Body from '../components/Body';
import NavBar from '../components/NavBar';

const containerStyle = {
    width: '1000px',
    height: '500px'
};

const center = {
    lat: 1.3521,
    lng: 103.8198
};

function MyComponent() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <>
            <NavBar></NavBar>
            <div className='pl-20 pr-20 pt-10 grid place-items-center'>
                <div className='border-black border-8 rounded-lg w-fit'>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                    { /* Child components, such as markers, info windows, etc. */ }
                    <>
                    </>
                </GoogleMap>
                </div>
            </div>
        </>
    ) : <>
            <NavBar></NavBar>
            <Body className="flex flex-col items-center">
                <div>
                    Map page failed to load (most likely because of invalid API Key).
                </div>
            </Body>
        </>
}

export default React.memo(MyComponent)
