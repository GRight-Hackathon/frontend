import React from 'react'
import { GoogleMap, useJsApiLoader, Marker, DirectionsRenderer, Autocomplete } from '@react-google-maps/api';

import Body from '../components/Body';
import NavBar from '../components/NavBar';

const containerStyle = {
    width: '75vw',
    height: '50vh'
};

const center = {
    lat: 1.3521,
    lng: 103.8198
};

export default function Map() {
    const { isLoaded } = useJsApiLoader({ // have to reload the webpage server everytime this is changed
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries: ['places']
    });

    const [map, setMap] = React.useState(/** @type google.maps.Map */ (null));
    const [directionsResponse, setDirectionsResponse] = React.useState(null);
    const [distance, setDistance] = React.useState('');
    const [duration, setDuration] = React.useState('');

    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = React.useRef()
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destiantionRef = React.useRef()

    async function calculateRoute() {
        if (originRef.current.value === '' || destiantionRef.current.value === '') {
          return
        }
        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
          origin: originRef.current.value,
          destination: destiantionRef.current.value,
          // eslint-disable-next-line no-undef
          travelMode: google.maps.TravelMode.DRIVING,
        })
        
        console.log(results)

        let steps = results.routes[0].legs[0].steps;
        let leftTurnOnlyResults = []
        for (let i = 0; i < steps.length; i++) {
            if (!steps[i].maneuver.includes('right')) {
                leftTurnOnlyResults.push(steps[i]);
            }
        }
        console.log(leftTurnOnlyResults)
        results.routes[0].legs[0].steps = leftTurnOnlyResults
        setDirectionsResponse(results)
        
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)
    }

    function clearRoute() {
        setDirectionsResponse(null)
        setDistance('')
        setDuration('')
        originRef.current.value = ''
        destiantionRef.current.value = ''
    }

    return isLoaded ? (
        <>
            <NavBar></NavBar>
            <div className='flex lg:flex-row flex-col place-items-center lg:p-7 p-3'>
                <div className='border-black border-4 rounded-lg w-fit mx-5'>
                    <div className='text-center flex justify-around border-b-4 border-black'>
                        <text className='p-3'>Distance: {distance ? distance : "-" } </text>
                        <text className='p-3'>Duration: {duration ? duration : "-"} </text>
                    </div>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={13}
                        options={{
                            zoomControl: false,
                            streetViewControl: false,
                            mapTypeControl: false,
                            fullscreenControl: false,
                        }}
                        onLoad={map => setMap(map)}
                    >
                        { /* Child components, such as markers, info windows, etc. */ }
                        <>
                            <Marker position={center} />
                            {directionsResponse && (
                                <DirectionsRenderer directions={directionsResponse} />
                            )}
                        </>
                    </GoogleMap>
                </div>
                <div className='rounded-lg lg:h-[50vh] lg:w-[20vw] m-4 h-auto w-[70vw] mx-2 flex flex-col self-center text-center justify-center'>
                    <Autocomplete>
                        <input type='text' placeholder='Origin' className='text-white rounded-xl h-[50px] w-[100%] my-1 text-center' ref={originRef} />
                    </Autocomplete>
                    <Autocomplete>
                        <input type='text' placeholder='Destination' className='text-white rounded-xl h-[50px] w-[100%] my-1 text-center' ref={destiantionRef} />
                    </Autocomplete>
                    <button className="bg-transparent rounded-xl hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 my-1 px-4 border border-blue-500 hover:border-transparent" onClick={calculateRoute}>
                        Calculate Route
                    </button>
                    <button className="bg-transparent rounded-xl hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 my-1 px-4 border border-blue-500 hover:border-transparent" onClick={clearRoute}>
                        Clear Route
                    </button>
                    <button className="bg-transparent rounded-xl hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 my-1 px-4 border border-blue-500 hover:border-transparent" onClick={() => {map.panTo(center); map.setZoom(13)}}>
                        Center Position
                    </button>
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
