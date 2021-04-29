import React, { useState, useRef, useCallback } from 'react';
import appstyles from '../styles/Covidapp.module.css';
import Meta from '../components/Meta';
import mapStyles from '../components/MapAssetts/mapStyles.js';

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  MarkerClusterer,

} from '@react-google-maps/api';
import { formatRelative } from 'date-fns';

import AppContainer from '../public/imgs/AppContainer.png';
import nhslogo from '../public/imgs/nhslogo.png';
import stopCovidLogo from '../public/imgs/stopCovidLogo.png';
import compas from '../public/imgs/compas.gif'

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';

//Place in variables to avoid re render issues
const libraries = ["places"];
//to help avoid re rendering
const mapContainerStyle = {
  width: '40vw',
  height: '60vh',

};
const center = {
  lat: 51.500149,
  lng: -0.126240,
}

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
}
const covidapp = ({ googleApiKeyforApp }) => {

  //React hook for loading google api (uses key and additional libraries)
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: googleApiKeyforApp,
    libraries,

  });

  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);


  //allows us to create a function that retains the same values unless the depth change
  const onMapClick = useCallback(
    (event) => {

      setMarkers(current => [
        ...current,
        {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
          time: new Date(),
        },
      ]);
    }, []);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);


  const panTo = useCallback(({lat,lng}) => {
      mapRef.current.panTo({lat, lng});
      mapRef.current.setZoom(14);
  }, []);

  if (loadError) return "error loading map";
  if (!isLoaded) return "loading maps";



  return (

    <>
      <Meta title="COVID app" />
      <div>
      <div className={appstyles.borderFrame}>
        <style jsx global>{`
      
             body {
             padding: 0;
             margin: 0;
             font-family:Roboto;
             
            }
            * {
             box-sizing: border-box;
            }
            
            `}</style>
    
      </div>
         
      <div className={appstyles.container}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={8}
          center={center}
          options={options}
          onClick={onMapClick}
          onLoad={onMapLoad}
        >
          {markers.map((marker) => (
            <Marker
              key={marker.time.toISOString()}
              onClick={() => {
                setSelected(marker);
              }}
              position={{ lat: marker.lat, lng: marker.lng }}
              icon={{
                url: '/imgs/CovidSymbol.gif',
                scaledSize: new window.google.maps.Size(25, 25),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(12.5, 12.5),
              }}
            />
          ))}

          {selected ? (<InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>Covid case</h2>
              <p>Time reported{formatRelative(selected.time, new Date())}</p>
            </div>
          </InfoWindow>) : null}
        </GoogleMap>
        <div className={appstyles.nhslogo}>
       
          <Search panTo = {panTo}/>
          
          <img src={nhslogo} loading="lazy" alt="NHS logo" width="55" height="55"></img>
      
        </div>
        <div className={appstyles.covid19logo} >
          <img src={stopCovidLogo} loading="lazy" alt="Covid logo" width="100" height="100"></img>
        </div>
        <div className = {appstyles.compasContainer}>
          <Locate panTo = {panTo}/>
        </div>
      </div>
   
      </div>
    </>

  )
}

function Locate({panTo}) {
  return <button
          onClick = {()=> {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                panTo({
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
                });
              }, 
              () => null
              );
          }}
          ><img src = {compas} loading = "lazy" alt = "compas logo" width = "50" height = "50"/>
  </button>
}

function Search({panTo}){
  const {
    ready, 
    value,
    suggestions: {status, data}, 
    setValue,
    clearSuggestions,
    } = usePlacesAutocomplete({
    requestOptions:{
      location: {  lat: () => 51.500149, lng: () =>  -0.126240}, //needs to return location as a function
      radius: 200 * 1000, //used for setting the middlepoint of the location converted from (Kilometer to meteres)
    },
  });

  return (
          
          <div className = {appstyles.search}>
          <Combobox 
          onSelect = {async (address) => {
            setValue(address, false);
            clearSuggestions();
            try {
                const results = await getGeocode({address});
                const {lat, lng} = await getLatLng(results[0]);
                panTo({lat,lng});
            } catch (error) {
                console.log(error)
            }
           
          }}
          >
          <ComboboxInput 
          value = {value} 
          onChange = {(e) => {
            setValue(e.target.value);//pass the value that is in the event(e)
          }}
          disabled = {!ready}
          placeholder = "Enter an address"
          />
          <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
             data.map(({id, description}) => (
                <ComboboxOption key = {id} value = {description} />
            ))}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
       
      </div>
      );
}

//Fetch and request functions
async function fetchCovidDataRequest(){
   return [];
};
async function createCovidDataRequest(covidData){
  console.log(covidData)
};

//Needed for processing local.env file
export async function getServerSideProps() {

  console.log(process.env.GOOGLE_MAPS_API_KEY);
  const googleApiKeyforApp = process.env.GOOGLE_MAPS_API_KEY;
  return {
    props: {
      googleApiKeyforApp
    }
  }
}

export default covidapp;
