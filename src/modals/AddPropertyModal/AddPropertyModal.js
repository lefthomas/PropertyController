import "./AddPropertyModal.css";
import ReactDom from "react-dom";
import { useState, useEffect } from "react";
import AddPropertyModalItem from "./AddPropertyModalItem/AddPropertyModalItem";
import AddPropertyModalSearch from "./AddPropertyModalSearch/AddPropertyModalSearch";
import { useLazyQuery } from "@apollo/client";
import { GET_SEARCH_OBJECT } from "../../queries/queries";

function AddPropertyModal({ ID, open, close }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchArray, setSearchArray] = useState([]);
  const [confirmedArray, setConfirmedArray] = useState([]);
  const [active, setActive] = useState("search");

  const [executeSearch, { data }] = useLazyQuery(GET_SEARCH_OBJECT);

  useEffect(() => {
    if (typeof data !== "undefined" && data != null)
      if (data.getPropertyByObject.length > 0)
        setSearchArray(data.getPropertyByObject);
  }, [data]);

  if (!open) return null;

  return ReactDom.createPortal(
    // Form tag was causing an inconsistent focus error in Chrome that was causing submit to fail randomly so changed to div

    <div className="property-modal-overlay">
      <div className="property-modal-container">
        <div>
          <h2>Request Property For Transfer </h2>
          <div className="add-property-modal-select-container">
            <button
              className={
                active === "search"
                  ? "property-modal-tab-btn property-modal-tab-btn-active"
                  : "property-modal-tab-btn"
              }
              onClick={() => setActive("search")}
            >
              Search Inventory
            </button>
            <button
              className={
                active === "newInventory"
                  ? "property-modal-tab-btn property-modal-tab-btn-active"
                  : "property-modal-tab-btn"
              }
              onClick={() => setActive("newInventory")}
            >
              Not on Inventory
            </button>
          </div>
        </div>
        {active === "newInventory" ? (
          <form className="property-modal-not-on-inventory-container">
            <label>description for additional objects:</label>
            <textarea className="property-modal-not-on-inventory-text-input" />
            <button className="property-modal-not-on-inventory-text-submit">
              Submit
            </button>
          </form>
        ) : (
          <div className="add-property-modal-search-container">
            <label for="add-property-modal-search-by">Search by: </label>
            <select
              className="add-property-modal-search-by-select"
              name="add-property-modal-search-by"
              id="add-property-modal-search-by"
            >
              <option value="object-number">Object Number</option>

              <option value="sale-code">Sale Code</option>
            </select>
            <div className="property-modal-search-div">
              <AddPropertyModalSearch
                onQuery={setSearchTerm}
                queryValue={searchTerm}
              />
              <button
                className="property-modal-search-btn"
                onClick={() =>
                  executeSearch({
                    variables: { objectNumbers: searchTerm },
                  })
                }
              >
                Search
              </button>
            </div>
            {searchArray.length > 0 && (
              <div>
                <p className="property-modal-staged-title">Search Results</p>
                <div className="property-modal-results-container">
                  <AddPropertyModalItem query={searchArray} ID={ID} />
                </div>
              </div>
            )}
          </div>
        )}

        <button
          type="button"
          className="property-modal-btn property-modal-btn-close"
          onClick={() => {
            close();
            setConfirmedArray([]);
          }}
        >
          Close Window
        </button>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default AddPropertyModal;
