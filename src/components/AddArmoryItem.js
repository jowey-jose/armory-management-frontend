import React, { useState } from "react";
import ArmoryItemDataService from "../services/ArmoryService";

const AddArmoryItem = () => {
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

  const [armoryItem, setArmoryItem] = useState(initialArmoryItemState);

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setArmoryItem({ ...armoryItem, [name]: value }); // Destructuring allows to extract data and set them to new distinct data.
  };

  const saveArmoryItem = () => {
    var data = {
        weapon_category: armoryItem.weapon_category,
        weapon_specs: armoryItem.weapon_specs,
        assigned_staff_badge_number: armoryItem.assigned_staff_badge_number,
        barcode: armoryItem.barcode,
        date_issued: armoryItem.date_issued,
        date_returned: armoryItem.date_returned,
        rfid: armoryItem.rfid,
        location: armoryItem.location,
    };

    ArmoryItemDataService.create(data)
      .then(response => {
        setArmoryItem({
          id: response.data.id,
          weapon_category: response.data.weapon_category,
          weapon_specs: response.data.weapon_specs,
          assigned_staff_badge_number: response.data.assigned_staff_badge_number,
          barcode: response.data.barcode,
          date_issued: response.data.date_issued,
          date_returned: response.data.date_returned,
          rfid: response.data.rfid,
          location: response.data.location,
        });

        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newArmoryItem = () => {
    setArmoryItem(initialArmoryItemState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newArmoryItem}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="weapon_category">Weapon Category</label>
            <input
              type="text"
              className="form-control"
              id="weapon_category"
              required
              value={armoryItem.weapon_category}
              onChange={handleInputChange}
              name="weapon_category"
            />
          </div>

          <div className="form-group">
            <label htmlFor="weapon_specs">Weapon Specs</label>
            <input
              type="text"
              className="form-control"
              id="weapon_specs"
              required
              value={armoryItem.weapon_specs}
              onChange={handleInputChange}
              name="weapon_specs"
            />
        </div>

          <div className="form-group">
            <label htmlFor="assigned_staff_badge_number">Assigned Staff Number</label>
            <input
              type="text"
              className="form-control"
              id="assigned_staff_badge_number"
              required
              value={armoryItem.assigned_staff_badge_number}
              onChange={handleInputChange}
              name="assigned_staff_badge_number"
            />

            </div>

          <div className="form-group">
            <label htmlFor="barcode">Bar Code</label>
            <input
              type="text"
              className="form-control"
              id="barcode"
              required
              value={armoryItem.barcode}
              onChange={handleInputChange}
              name="barcode"
            />
            </div>

          <div className="form-group">
            <label htmlFor="date_issued">Date Issued</label>
            <input
              type="text"
              className="form-control"
              id="date_issued"
              required
              value={armoryItem.date_issued}
              onChange={handleInputChange}
              name="date_issued"
            />
          </div>

          <div className="form-group">
            <label htmlFor="date_returned">Date Returned</label>
            <input
              type="text"
              className="form-control"
              id="date_returned"
              required
              value={armoryItem.date_returned}
              onChange={handleInputChange}
              name="date_returned"
            />
          </div>

          <div className="form-group">
            <label htmlFor="rfid">RFID</label>
            <input
              type="text"
              className="form-control"
              id="rfid"
              required
              value={armoryItem.rfid}
              onChange={handleInputChange}
              name="rfid"
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              required
              value={armoryItem.location}
              onChange={handleInputChange}
              name="location"
            />
          </div>

          <button onClick={saveArmoryItem} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddArmoryItem;