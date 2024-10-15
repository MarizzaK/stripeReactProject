import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 59.3326,
  lng: 17.9795,
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBEMFDVLXYapZ-slIpGF2q0p4BDZqZWx9k">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        {}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
