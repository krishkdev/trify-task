import React, { useState } from "react";
import { Map, Marker } from "pigeon-maps";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const stations = [
  {
    id: 1,
    latitute: 13.9,
    longitude: 67.8,
    battery_count: 3,
    details: {
      name: "BSR",
      batteries: 2,
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
      name: "RSR",
      batteries: 0,
      contact: "87363733",
    },
  },
];

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const setModalIsOpenToTrue = (details) => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  function PlaceList() {
    return (
      <>
        <ul>
          <h1>About place</h1>
          <h3>
            Place name:{" "}
            <span style={{ fontWeight: 400 }}>{modalData.name}</span>
          </h3>
          <h3>
            Batteries left:{" "}
            <span style={{ fontWeight: 400 }}>{modalData.batteries}</span>
          </h3>
          <h3>
            Contact:{" "}
            <span style={{ fontWeight: 400 }}>{modalData.contact}</span>
          </h3>
        </ul>
      </>
    );
  }

  return (
    <div>
      <Map height={1000} defaultCenter={[14.9, 66.8]} defaultZoom={10}>
        {stations.map((coords) => (
          <Marker
            key={coords.id}
            width={50}
            anchor={[coords.latitute, coords.longitude]}
            onClick={() => {
              setModalData(coords.details);
              setModalIsOpen(true);
            }}
          />
        ))}
      </Map>
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <button onClick={setModalIsOpenToFalse}>x</button>
        <PlaceList />
      </Modal>
    </div>
  );
}

export default App;
