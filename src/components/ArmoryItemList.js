import React, { useState, useEffect } from "react";
import ArmoryItemDataService from "../services/ArmoryService";
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const ArmoryItemList = () => {
  let navigate = useNavigate();

  const [armoryItems, setArmoryItems] = useState([]);
  const [currentArmoryItem, setCurrentArmoryItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  // const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveArmoryItems();
  }, []);

  // const onChangeSearchTitle = e => {
  //   const searchTitle = e.target.value;
  //   setSearchTitle(searchTitle);
  // };

  const retrieveArmoryItems = () => {
    ArmoryItemDataService.getAll()
      .then(response => {
        setArmoryItems(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveArmoryItems();
    setCurrentArmoryItem(null);
    setCurrentIndex(-1);
  };

  const setActiveArmoryItem = (currentArmoryItem, index) => {
    setCurrentArmoryItem(currentArmoryItem);
    setCurrentIndex(index);
  };

  const removeAllArmoryItems = () => {
    ArmoryItemDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  // const findByTitle = () => {
  //   ArmoryItemDataService.findByTitle(searchTitle)
  //     .then(response => {
  //       setArmoryItems(response.data);
  //       console.log(response.data);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };

  return (
    <div className="list row">
      {/* <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByTitle}
            >
              Search
            </button>
          </div>
        </div>
      </div> */}
      <div className="col-md-8">
        <h4>Armory Items List</h4>

        {/* <ul className="list-group">
          {armoryItems &&
            armoryItems.map((armoryItem, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveArmoryItem(armoryItem, index)}
                key={index}
              >
                {armoryItem.weapon_category}
              </li>
            ))}
        </ul> */}
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Weapon Category</th>
              <th scope="col">Weapon Specs</th>
              <th scope="col">Assigned To</th>
              {/* <th scope="col">Date Issued</th>
              <th scope="col">Date Returned</th>
              <th scope="col">Location</th>
              <th scope="col">Status</th> */}
            </tr>
          </thead>
          <tbody>
            {
              armoryItems && armoryItems.map((armoryItem, index) => (
                <tr
                  className={
                    index === currentIndex ? "active" : ""
                  }
                  onClick={() => setActiveArmoryItem(armoryItem, index)}
                  key={index}
                >
                  <th scope="row">{armoryItem.id}</th>
                  <td>{armoryItem.weapon_category}</td>
                  <td>{armoryItem.weapon_specs}</td>
                  <td>{armoryItem.assigned_to}</td>
                </tr>
              ))
            }
          </tbody>
        </table>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllArmoryItems}
        >
          Remove All
        </button>
      </div>

      <div className="col-md-4">
        {currentArmoryItem ? (
          <div>
            <h4>Armory Item</h4>
            <div>
              <label>
                <strong>Weapon Category:</strong>
              </label>{" "}
              {currentArmoryItem.weapon_category}
            </div>
            <div>
              <label>
                <strong>Weapon Specs:</strong>
              </label>{" "}
              {currentArmoryItem.weapon_specs}
            </div>
            <div>
              <label>
                <strong>Assigned To:</strong>
              </label>{" "}
              {currentArmoryItem.assigned_to}
            </div>
            <div>
              <label>
                <strong>Assigned Staff Number:</strong>
              </label>{" "}
              {currentArmoryItem.assigned_staff_badge_number}
            </div>
            <div>
              <label>
                <strong>Bar code:</strong>
              </label>{" "}
              {currentArmoryItem.barcode}
            </div>
            <div>
              <label>
                <strong>Date Issued:</strong>
              </label>{" "}
              {currentArmoryItem.date_issued}
            </div>
            <div>
              <label>
                <strong>Date Returned:</strong>
              </label>{" "}
              {currentArmoryItem.date_returned}
            </div>
            <div>
              <label>
                <strong>RFID:</strong>
              </label>{" "}
              {currentArmoryItem.rfid}
            </div>
            <div>
              <label>
                <strong>Location:</strong>
              </label>{" "}
              {currentArmoryItem.location}
            </div>
            <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {currentArmoryItem.is_issued ? "Issued" : "Not-Issued"}
            </div>

            <br/>
            <button type="button" class="btn btn-warning" onClick={() => navigate("/armory-item/" + currentArmoryItem.id)}>Edit</button>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on an Armory Item on the left to show details...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArmoryItemList;