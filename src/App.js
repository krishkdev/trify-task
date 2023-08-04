import React, { useState } from "react";
import { Map, Marker, Overlay } from "pigeon-maps";
import Modal from "react-modal";
import "./App.css";
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
    latitute: 13.06801209460255,
    longitude: 80.25190234073149,

    details: {
      name: "EVS-1, Nungambakkam",
      batteries: 2,
      contact: "7813637331",
    },
  },
  {
    id: 2,
    latitute: 13.045609615502588,
    longitude: 80.24779077921903,

    details: {
      name: "EVS-2, Teynampet",
      batteries: 6,
      contact: "87873363733",
    },
  },
  {
    id: 3,
    latitute: 13.041493724404843,
    longitude: 80.232683837241,

    details: {
      name: "EVS-3, TNagar",
      batteries: 0,
      contact: "9187363733",
    },
  },
  {
    id: 4,
    latitute: 13.018904876914265,
    longitude: 80.27002887517634,

    details: {
      name: "EVS-4, RA puram",
      batteries: 0,
      contact: "9187363733",
    },
  },
  {
    id: 5,
    latitute: 13.025529252365498,
    longitude: 80.22965843136527,

    details: {
      name: "EVS-5, Saidapet",
      batteries: 0,
      contact: "9187363733",
    },
  },
];

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
