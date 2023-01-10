import "./AddPropertyModal.css";
import ReactDom from "react-dom";
import { useState, useEffect } from "react";
import AddPropertyModalItem from "./AddPropertyModalItem/AddPropertyModalItem";
import AddPropertyModalSearch from "./AddPropertyModalSearch/AddPropertyModalSearch";
import { useLazyQuery, useMutation, gql } from "@apollo/client";

const GET_OBJECT = gql`
  query GetPropertyByObject($objectNumbers: [String]) {
    getPropertyByObject(objectNumbers: $objectNumbers) {
      artist
      lot
      objectNumber
      title
      saleNumber
    }
  }
`;

const ADD_WORKS_TO_TRANSFER = gql`
  mutation Mutation($id: ID!, $transferInput: TransferInput) {
    addWorkToTransfer(ID: $id, transferInput: $transferInput)
  }
`;

const ADD_WORKS_TO_HOLD = gql`
  mutation Mutation($id: ID!, $holdInput: HoldInput) {
    addWorkToHold(ID: $id, holdInput: $holdInput)
  }
`;

function AddPropertyModal(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchArray, setSearchArray] = useState([]);
  const [confirmedArray, setConfirmedArray] = useState([]);

  const [executeSearch, { data }] = useLazyQuery(GET_OBJECT);
  const [addWorksToTransfer] = useMutation(ADD_WORKS_TO_TRANSFER);
  const [addWorksToHold] = useMutation(ADD_WORKS_TO_HOLD);

  useEffect(() => {
    if (typeof data !== "undefined" && data != null)
      if (data.getPropertyByObject.length > 0)
        setSearchArray(data.getPropertyByObject);
  }, [data]);

  const handleConfirmedObjs = (e) => {
    e.preventDefault();
    setConfirmedArray([...confirmedArray, ...searchArray]);
    setSearchArray([]);
  };

  const addPropertyToTransfer = (e) => {
    e.preventDefault();
    confirmedArray.map(({ artist, lot, objectNumber, saleNumber, title }) =>
      addWorksToTransfer({
        variables: {
          id: props.ID,
          transferInput: {
            requestedProperty: [
              {
                artist: artist,
                lot: lot,
                objectNumber: objectNumber,
                saleNumber: saleNumber,
                title: title,
              },
            ],
          },
        },
      })
    );
    props.close();
    setConfirmedArray([]);
  };

  const addPropertyToHold = (e) => {
    e.preventDefault();
    confirmedArray.map(({ artist, lot, objectNumber, title }) =>
      addWorksToHold({
        variables: {
          id: props.ID,
          holdInput: {
            requestedProperty: [
              {
                artist: artist,
                lot: lot,
                objectNumber: objectNumber,
                title: title,
                keepLoc: props.destLoc,
              },
            ],
          },
        },
      })
    );
    props.close();
    setConfirmedArray([]);
  };

  if (!props.open) return null;

  return ReactDom.createPortal(
    // Form tag was causing an inconsistent focus error in Chrome that was causing submit to fail randomly so changed to div

    <div className="property-modal-overlay">
      <div className="property-modal-container">
        <div>
          <div className="property-modal-search-div">
            <AddPropertyModalSearch
              onQuery={setSearchTerm}
              queryValue={searchTerm}
            />
            <button
              className="property-modal-btn"
              onClick={() =>
                executeSearch({
                  variables: { objectNumbers: searchTerm },
                })
              }
            >
              Search
            </button>
          </div>

          <div className="property-modal-staged">
            <AddPropertyModalItem query={searchArray} />
          </div>
          <button className="property-modal-btn" onClick={handleConfirmedObjs}>
            Add selected
          </button>
          <hr className="property-modal-hr-divide" />
          <div className="property-modal-confirmed">
            <AddPropertyModalItem query={confirmedArray} />
          </div>
          <div className="property-modal-btn-div">
            <button
              type="submit"
              className="property-modal-btn property-modal-btn-confirm"
              onClick={
                props.origin === "HOLD"
                  ? addPropertyToHold
                  : addPropertyToTransfer
              }
            >
              Confirm
            </button>
            <button
              type="button"
              className="property-modal-btn property-modal-btn-cancel"
              onClick={() => {
                props.close();
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
