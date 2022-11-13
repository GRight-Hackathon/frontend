import React from 'react'
import { GoogleMap, useJsApiLoader, Marker, DirectionsRenderer, Autocomplete } from '@react-google-maps/api';
import axios from 'axios';
import cloneDeep from 'lodash';

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

export default function Map() {
    const { isLoaded } = useJsApiLoader({ // have to reload the webpage server everytime this is changed
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries: ['places']
    })

    const [map, setMap] = React.useState(/** @type google.maps.Map */ (null))
    const [directionsResponse, setDirectionsResponse] = React.useState(null)
    const [distance, setDistance] = React.useState('')
    const [duration, setDuration] = React.useState('')

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
        let priorUnwantedSteps = []
        for (let i = 0; i < steps.length; i++) {
            if (!steps[i].maneuver.includes('turn-right')) {
                leftTurnOnlyResults.push(steps[i]);
            } else {
                priorUnwantedSteps.push(i);
            }
        }

        console.log(extractLatLong(steps, priorUnwantedSteps[0]))

        for (let i = 0; i < priorUnwantedSteps.length; i++) {
            let index = priorUnwantedSteps[i]
            let url = 'https://roads.googleapis.com/v1/snapToRoads?path='
            let interpolate = '&interpolate=true'
            let api_key = '&key=' + process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
            let latlng = extractLatLong(steps, index)

            let config = {
            method: 'get',
            url: url + latlng + interpolate + api_key,
            headers: { }
            };

            axios(config)
            .then(function (response) {
            console.log(response.data)
            console.log(response.data.snappedPoints[0])
            let editLatLng = []
            for (let i = 0; i < response.data.snappedPoints.length; i++) {
                let element = response.data.snappedPoints[i].location
                let coord = [element.latitude, element.longitude]
                editLatLng.push(coord)
            }

            console.log(editLatLng)
            console.log(priorUnwantedSteps)
            console.log(steps[i].lat_lngs[0].lat())
            steps[i].lat_lngs[0].lat = () => {return 1}
            console.log(steps[i].lat_lngs[0].lat())

            for (let j = 0; j < editLatLng.length; j++) {
                let copy = _.cloneDeep(steps[index - 1].lat_lngs[0])
                copy.lat = () => {return editLatLng[j][0]}
                copy.lng = () => {return editLatLng[j][1]}
                steps[index - 1].lat_lngs.push(copy)
                steps[index - 1].path.push(copy)
            }

            })
            .catch(function (error) {
            console.log(error);
            });
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

    function extractLatLong(stepsArr, skippedStepIndex) {
        let stepBeforeResult = []
        let stepAfterResult = []
        let resultString = ""
        
        if (skippedStepIndex > 0) {
            let  stepBefore = stepsArr[skippedStepIndex - 1]
            for (let i = 0; i < stepBefore.lat_lngs.length; i++) {
                let lat_lng = stepBefore.lat_lngs[i]
                stepBeforeResult.push(lat_lng.lat() + "," + lat_lng.lng())
            }
            resultString = stepBeforeResult.join("|")
        }

        if (skippedStepIndex < stepsArr.length - 1) {
            let stepAfter = stepsArr[skippedStepIndex + 1]
            for (let i = 0; i < stepAfter.lat_lngs.length; i++) {
                let lat_lng = stepAfter.lat_lngs[i]
                stepAfterResult.push(lat_lng.lat() + "," + lat_lng.lng())
            }
            resultString = resultString.length === 0 ? resultString : resultString + "|"
            resultString += stepAfterResult.join("|")
        }
        return resultString
    }

    return isLoaded ? (
        <>
            <NavBar></NavBar>
            <div className='pl-20 pr-20 pt-10 grid place-items-center'>
                <div className='border-black border-8 rounded-lg w-fit'>
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
            </div>
            <div>
                <Autocomplete>
                <input type='text' placeholder='Origin' className='text-black' ref={originRef} />
                </Autocomplete>
                <Autocomplete>
                <input type='text' placeholder='Destination' className='text-black' ref={destiantionRef} />
                </Autocomplete>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={calculateRoute}>
                    Calculate Route
                </button>
                <text>Distance: {distance} </text>
                <text>Duration: {duration} </text>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={clearRoute}>
                    Clear Route
                </button>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => {map.panTo(center); map.setZoom(13)}}>
                    Center Position
                </button>
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
