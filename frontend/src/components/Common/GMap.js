import React from "react";
import { Map, TileLayer , Marker , Popup, withLeaflet,useLeaflet } from "react-leaflet";
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch'
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet/dist/leaflet.css";
import "./search.css"
import "lrm-google";
import "./routing.css";
import useGeoLocation from "./useGeoLocation";
const markerstart = new L.Icon({
    iconUrl: require("./marker/red.png"),
    iconSize: [40, 40],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46], 
  });
  const markerend = new L.Icon({
    iconUrl: require("./marker/black.png"),
    iconSize: [40, 40],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46], 
  });
export default function GMap(){
const [center,setCenter] = React.useState({lat:31.5204,lng: 74.3587});
const ZOOM_LEVEL= 9;
const mapRef= React.useRef();

  const location = useGeoLocation();

  // make new leaflet element
const Search = (props) => {
  const { map } = useLeaflet() // access to leaflet map
  const { provider } = props

  React.useEffect(() => {
    
      const searchControl = new GeoSearchControl({
          provider,showMarker: true,showPopup: false,  marker: {
            icon: new L.Icon({
              iconUrl: require("./marker/black.png"),
              iconSize: [40, 40],
              iconAnchor: [17, 46],
              popupAnchor: [0, -46], 
            }),
            draggable: false,
            
          },
      })
      map.addControl(searchControl) // this is how you add a control in vanilla leaflet


      return () => {map.removeControl(searchControl)
      }
  }, [props])


  return null // don't want anything to show up from this comp
}

return (

    <Map
    style={{height:"100vw",width:"100vw"}}
    center={center}
    zoom={ZOOM_LEVEL}
    ref={mapRef}
    >
        <TileLayer
        url={"https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=ZCG7N28011wlM8ubEEWf"}
        attribution={'&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}

        
        />
                {location.loaded && !location.error && (
                <Marker
                  icon={markerstart}
                  position={[
                    location.coordinates.lat,
                    location.coordinates.lng,
                  ]}
                ><Popup>
                  <p>Your Current Location</p>
                  <p>Latitude:{location.coordinates.lat}</p>
                  <p>Longitude:{location.coordinates.lng}</p>
                  </Popup></Marker>
              )}
                    <Search provider={new OpenStreetMapProvider()} />
    </Map>


);

}