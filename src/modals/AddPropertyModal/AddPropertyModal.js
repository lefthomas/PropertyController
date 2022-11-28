import "./AddPropertyModal.css";
import ReactDom from "react-dom";
import { useState } from "react";
import AddPropertyModalItem from "./AddPropertyModalItem/AddPropertyModalItem";

function AddPropertyModal(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [stagedArray, setStagedArray] = useState([]);
  const [confirmedArray, setConfirmedArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStagedArray([...stagedArray, searchTerm]);
  };

  const handleConfirmedObjs = (e) => {
    e.preventDefault();
    setConfirmedArray([...confirmedArray, ...stagedArray]);
    setStagedArray([]);
  };

  if (!props.open) return null;
  return ReactDom.createPortal(
    // Form tag was causing an inconsistent focus error in Chrome that was causing submit to fail randomly so changed to div

    <div className="property-modal-overlay">
      <div className="property-modal-container">
        <h2 className="property-modal-header">Request Property for Transfer</h2>

        <div>
          <form>
            <p>Search by Object Number</p>
            <input
              type="text"
              placeholder="search"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
            <button onClick={handleSubmit}>Search</button>
          </form>
          <div className="property-modal-staged">
            {stagedArray.map((obj) => (
              <AddPropertyModalItem objectNumber={obj} key={obj} />
            ))}
            <button onClick={handleConfirmedObjs}>Add selected</button>
          </div>
          <div className="property-modal-confirmed">
            {confirmedArray.map((obj) => (
              <AddPropertyModalItem objectNumber={obj} key={obj} />
            ))}
          </div>
          <div>
            <button
              type="submit"
              className="property-modal-btn property-modal-btn-confirm"
            >
              Confirm
            </button>
            <button
              type="button"
              className="property-modal-btn property-modal-btn-cancel"
              onClick={() => {
                props.close();
                setStagedArray([]);
                setConfirmedArray([]);
              }}
            >
              Cancel
            </button>
          </div>
        </div>

        {/* <div className="add-property-modal-select-container">
          <button>Search Inventory</button>
          <button>Not on Inventory</button>
          <div className="add-property-modal-on-inventory-input-view">
            <label for="add-property-modal-search-by">Search by:</label>
            <select
              name="add-property-modal-search-by"
              id="add-property-modal-search-by"
            >
              <option value="object-number">Object Number</option>

              <option value="sale-code">Sale Code</option>
            </select>
          </div>

          <div className="add-property-modal-not-on-inventory-input-view"></div>
        </div>

        <div className="add-property-modal-staged-property-view"></div> */}
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default AddPropertyModal;
