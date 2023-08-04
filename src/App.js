import React from "react";
import { Map, Marker } from "pigeon-maps";

const stations = [
  {
    id: 1,
    latitute: 13.9,
    longitude: 67.8,
    battery_count: 3,
    details: {
      name: "HSR",
      batteries: 3,
      contact: "87363733",
    },
  },
  {
    id: 2,
    latitute: 14.9,
    longitude: 66.8,
    battery_count: 0,
    details: {
      name: "HSR",
      batteries: 3,
      contact: "87363733",
    },
  },
  {
    id: 3,
    latitute: 15.9,
    longitude: 65.8,
    battery_count: 1,
    details: {
      name: "HSR",
      batteries: 3,
      contact: "87363733",
    },
  },
];

function App() {
  return (
    <div>
      <Map height={1000} defaultCenter={[14.9, 66.8]} defaultZoom={10}>
        {stations.map((coords) => (
          <Marker
            width={50}
            anchor={[coords.latitute, coords.longitude]}
            onClick={() => {
              alert(coords.latitute + " " + coords.longitude);
            }}
          />
        ))}
      </Map>
    </div>
  );
}

export default App;
