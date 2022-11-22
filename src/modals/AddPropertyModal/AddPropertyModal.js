// import { useState } from "react";
import "./AddPropertyModal.css";
import ReactDom from "react-dom";

function AddPropertyModal(props) {
  if (!props.open) return null;
  return ReactDom.createPortal(
    // Form tag was causing an inconsistent focus error in Chrome that was causing submit to fail randomly so changed to div

    <div className="transfer-modal-overlay">
      <div className="transfer-modal-container">
        <h2 className="transfer-modal-header">Request Property for Transfer</h2>

        <div className="add-property-modal-select-container">
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

        <div className="add-property-modal-staged-property-view"></div>

        <button
          type="submit"
          className="transfer-modal-btn transfer-modal-btn-confirm"
        >
          Confirm
        </button>
        <button
          type="button"
          className="transfer-modal-btn transfer-modal-btn-cancel"
          onClick={() => props.close()}
        >
          Cancel
        </button>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default AddPropertyModal;
