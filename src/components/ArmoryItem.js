import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import ArmoryItemDataService from "../services/ArmoryService";

const ArmoryItem = props => {
  const { id }= useParams();
  let navigate = useNavigate();

  const initialArmoryItemState = {
    id: null,
    weapon_category: "",
    weapon_specs: "",
    assigned_staff_badge_number: "",
    barcode: "",
    date_issued: "",
    date_returned: "",
    rfid: "",
    location: "",
    is_issued: false
  };
  const [currentArmoryItem, setCurrentArmoryItem] = useState(initialArmoryItemState);

  const [message, setMessage] = useState("");

  const getArmoryItem = id => {
    ArmoryItemDataService.get(id)
      .then(response => {
        setCurrentArmoryItem(response.data);

        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
    getArmoryItem(id);
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentArmoryItem({ ...currentArmoryItem, [name]: value });
  };

  const updateIfIssued = status => {
    var data = {
        id: currentArmoryItem.id,
        weapon_category: currentArmoryItem.weapon_category,
        weapon_specs: currentArmoryItem.weapon_specs,
        assigned_staff_badge_number: currentArmoryItem.assigned_staff_badge_number,
        barcode: currentArmoryItem.barcode,
        date_issued: currentArmoryItem.date_issued,
        date_returned: currentArmoryItem.date_returned,
        rfid: currentArmoryItem.rfid,
        location: currentArmoryItem.location,
        is_issued: status
    };

    ArmoryItemDataService.update(currentArmoryItem.id, data)
      .then(response => {
        setCurrentArmoryItem({ ...currentArmoryItem, is_issued: status });
        
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateArmoryItem = () => {
    ArmoryItemDataService.update(currentArmoryItem.id, currentArmoryItem)
      .then(response => {
        console.log(response.data);
        setMessage("The Armory Item was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteArmoryItem = () => {
    ArmoryItemDataService.remove(currentArmoryItem.id)
      .then(response => {
        console.log(response.data);
        navigate("/armory-item-list");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentArmoryItem ? (
        <div className="edit-form">
          <h4>Armory Item</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Weapon Category</label>
              <input
                type="text"
                className="form-control"
                id="weapon_category"
                name="weapon_category"
                value={currentArmoryItem.weapon_category}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="weapon_specs">Weapon Specs</label>
              <input
                type="text"
                className="form-control"
                id="weapon_specs"
                name="weapon_specs"
                value={currentArmoryItem.weapon_specs}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="barcode">Bar Code</label>
              <input
                type="text"
                className="form-control"
                id="barcode"
                name="barcode"
                value={currentArmoryItem.barcode}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="date_issued">Date Issued</label>
              <input
                type="text"
                className="form-control"
                id="date_issued"
                name="date_issued"
                value={currentArmoryItem.date_issued}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="date_returned">Date Returned</label>
              <input
                type="text"
                className="form-control"
                id="date_returned"
                name="date_returned"
                value={currentArmoryItem.date_returned}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="rfid">RFID</label>
              <input
                type="text"
                className="form-control"
                id="rfid"
                name="rfid"
                value={currentArmoryItem.rfid}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                className="form-control"
                id="location"
                name="location"
                value={currentArmoryItem.location}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentArmoryItem.is_issued ? "Issued" : "Not-Issued"}
            </div>
          </form>

          {currentArmoryItem.is_issued ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updateIfIssued(false)}
            >
              Un-Issue
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updateIfIssued(true)}
            >
              Issue
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={deleteArmoryItem}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateArmoryItem}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a ArmoryItem...</p>
        </div>
      )}
    </div>
  );
};

export default ArmoryItem;