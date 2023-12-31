import { useMutation } from "@apollo/client";
import { useState } from "react";
import "./TransferModal.css";
import ReactDom from "react-dom";
import DateTimePicker from "react-datetime-picker";
import { GET_TRANSFERS, GET_GLANCE_BOX } from "../../queries/queries";
import { CREATE_TRANSFER } from "../../mutations/mutations";

function TransferModal({ originLoc, close, open }) {
  const [shipper, setShipper] = useState("");
  const [coordinator, setCoordinator] = useState("");
  const [additionsDate, setAdditionsDate] = useState(new Date());
  const [departureDate, setDepartureDate] = useState(new Date());

  const [newTransfer] = useMutation(CREATE_TRANSFER, {
    refetchQueries: [
      { query: GET_TRANSFERS, variables: { originLocation: originLoc } },
      { query: GET_GLANCE_BOX, variables: { LWH: "LWH", BSQ: "BSQ" } },
    ],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    newTransfer({
      variables: {
        additionsDate: additionsDate,
        coordinator: coordinator,
        departureDate: departureDate,
        shipper: shipper,
        originLocation: originLoc,
        requestedProperty: [],
      },
    });

    close();
    setShipper("");
    setCoordinator("");
    setAdditionsDate(new Date());
    setDepartureDate(new Date());
  };

  if (!open) return null;
  return ReactDom.createPortal(
    // Form tag was causing an inconsistent focus error in Chrome that was causing submit to fail randomly so changed to div

    <div className="transfer-modal-overlay">
      <div className="transfer-modal-container">
        <h2 className="transfer-modal-header">Schedule New Transfer</h2>
        <div className="transfer-modal-form">
          <div className="transfer-modal-label-container">
            <p
              className="transfer-modal-label"
              htmlFor="transfer-modal-shipper"
            >
              Shipper
            </p>
            <input
              name="transfer-modal-shipper"
              id="transfer-modal-shipper"
              className="transfer-modal-input"
              value={shipper}
              onChange={(e) => setShipper(e.target.value)}
            />
          </div>
          <div className="transfer-modal-label-container">
            <p
              className="transfer-modal-label"
              htmlFor="transfer-modal-coordinator"
            >
              Coordinator
            </p>
            <input
              name="transfer-modal-coordinator"
              id="transfer-modal-coordinator"
              className="transfer-modal-input"
              value={coordinator}
              onChange={(e) => setCoordinator(e.target.value)}
            />
          </div>

          <div
            className="transfer-modal-label-container"
            name="additions-date-container"
          >
            <p className="transfer-modal-label">
              Deadline for Additions
              <span className="transfer-modal-deadline"> - required</span>
            </p>
            <DateTimePicker
              onChange={setAdditionsDate}
              value={additionsDate}
              disableClock={true}
              required={true}
              className={"transfer-modal-input"}
              calendarIcon={null}
              minDate={new Date()}
              name={"additions-date-picker"}
            />
          </div>
          <div
            className="transfer-modal-label-container"
            name="departure-date-container"
          >
            <p className="transfer-modal-label">Departure Date</p>
            <DateTimePicker
              onChange={setDepartureDate}
              value={departureDate}
              disableClock={true}
              className={"transfer-modal-input"}
              calendarIcon={null}
              minDate={new Date()}
              name={"departure-date-picker"}
            />
          </div>

          <button
            type="submit"
            className="transfer-modal-btn transfer-modal-btn-confirm"
            onClick={handleSubmit}
          >
            Confirm
          </button>
          <button
            type="button"
            className="transfer-modal-btn transfer-modal-btn-cancel"
            onClick={() => close()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default TransferModal;
