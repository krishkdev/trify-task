import React, { useState } from "react";
import { Map, Marker } from "pigeon-maps";
import Modal from "react-modal";
import "./App.css";
import { stations } from "./data";

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

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [hideEmptyEVS, setHideEmptyEVS] = useState(false);

  function showEvs() {
    setHideEmptyEVS(false);
  }

  function hideEvs() {
    setHideEmptyEVS(true);
  }

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  function PlaceList() {
    return (
      <ul>
        <h1>About place</h1>
        <h3>
          Place name: <span style={{ fontWeight: 400 }}>{modalData.name}</span>
        </h3>
        <h3>
          Batteries left:{" "}
          <span style={{ fontWeight: 400 }}>{modalData.batteries}</span>
        </h3>
        <h3>
          Contact: <span style={{ fontWeight: 400 }}>{modalData.contact}</span>
        </h3>
      </ul>
    );
  }

  return (
    <div>
      <h1 className="title">EV Charging stations</h1>
      <Map height={800} defaultCenter={[13.04, 80.2]} defaultZoom={12}>
        {hideEmptyEVS
          ? stations
              .filter((f) => f.details.batteries !== 0)
              .map((coords) => (
                <Marker
                  key={coords.id}
                  width={50}
                  anchor={[coords.latitute, coords.longitude]}
                  onClick={() => {
                    setModalData(coords.details);
                    setModalIsOpen(true);
                  }}
                />
              ))
          : stations.map((coords) => (
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
      <div className="showhide">
        {!hideEmptyEVS ? (
          <button className="toggler hide" onClick={hideEvs}>
            Hide
          </button>
        ) : (
          <button className="toggler show" onClick={showEvs}>
            Show
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
