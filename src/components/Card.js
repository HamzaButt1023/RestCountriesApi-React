import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function Card({ record }) {
  const parms = useParams();
  const Details = record.filter((item) => {
    return item.name.common === parms.common;
  });
  const currentDetails = Details[0];
  const [langArray, setLang] = useState(currentDetails.languages);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  function handleClick(e) {
    e.preventDefault();
    const newVal = e.target.elements[0].value;
    setLang((prevLang) =>
      Object.assign(prevLang, { [newVal.slice(0, 3)]: newVal })
    );
  }

  return (
    <>
      <div className="container-fluid" id="box">
        <div className="row">
          <div className="col-8 ps-0 pb-3">
            <div className="card">
              <div className="card-body text-white">
                <div className="row">
                  <div className="col-5">
                    <img
                      className="w-100"
                      src={currentDetails.flags.png}
                      alt={`Flag of ${currentDetails.name.official}`}
                    />
                  </div>
                  <div className="col-7">
                    <div className="row">
                      <div className="col-12">
                        <h3>{currentDetails.name.common}</h3>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-3">
                        <p className="fw-bold mb-0">Currency:</p>
                      </div>
                      <div className="col-9">
                        <p className="mb-0">
                          {Object.keys(currentDetails?.currencies)}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <p className="fw-bold mb-0">Region :</p>
                      </div>
                      <div className="col-9">
                        <p className="mb-0">{currentDetails.region}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <p className="fw-bold mb-0">Sub-Region :</p>
                      </div>
                      <div className="col-9">
                        <p className="mb-0">{currentDetails.subregion}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <p className="fw-bold mb-0">Map :</p>
                      </div>
                      <div className="col-9">
                        <a
                          href={currentDetails.maps.openStreetMaps}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <button className="btn btn-primary btn-sm py-0 px-2">
                            Get location on Map
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <p className="fw-bold mb-0">Languages :</p>
                      </div>
                      <div className="col-9">
                        <p className="mb-0">
                          {Object.values(currentDetails?.languages).join(", ")}
                        </p>
                        <span>
                          <button
                            className="btn btn-dark btn-sm py-0 px-2"
                            onClick={toggle}
                          >
                            Add Language
                          </button>
                        </span>
                      </div>
                    </div>

                    <div>
                      <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader className="text-white" toggle={toggle}>
                          Edit Languages
                        </ModalHeader>
                        <ModalBody>
                          <form onSubmit={handleClick}>
                            <label className="text-white">Add Languages:</label>

                            <input
                              className="form-control mx-1"
                              type="text"
                              id="message"
                              name="message"
                            />

                            <button className="btn btn-success btn-sm my-2">
                              Add New Language
                            </button>

                            <p className="mb-0 text-white">
                              {Object.values(langArray).join(", ")}
                            </p>
                          </form>
                        </ModalBody>
                        <ModalFooter>
                          <Button color="primary" onClick={toggle}>
                            Save
                          </Button>{" "}
                          <Button color="secondary" onClick={toggle}>
                            Cancel
                          </Button>
                        </ModalFooter>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
