import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import "./TransferModal.css";
import ReactDom from "react-dom";
import DateTimePicker from "react-datetime-picker";

function TransferModal(props) {
  const [shipper, setShipper] = useState("");
  const [coordinator, setCoordinator] = useState("");
  const [additionsDate, setAdditionsDate] = useState("");
  const [departureDate, setDepartureDate] = useState(new Date());

  const CREATE_TRANSFER = gql`
    mutation Mutation($shipper: String, $coordinator: String) {
      createTransfer(shipper: $shipper, coordinator: $coordinator) {
        shipper
        coordinator
      }
    }
  `;

  const [newTransfer] = useMutation(CREATE_TRANSFER);

  const handleSubmit = (e) => {
    e.preventDefault();

    // newTransfer({ variables: { shipper: shipper, coordinator: coordinator } });

    props.close();
    setShipper("");
    setCoordinator("");
  };

  if (!props.open) return null;
  return ReactDom.createPortal(
    <div className="transfer-modal-overlay">
      <div className="transfer-modal-container">
        <h2 className="transfer-modal-header">Schedule New Transfer</h2>
        <form className="transfer-modal-form" onSubmit={handleSubmit}>
          <div className="transfer-modal-label-container">
            <label
              className="transfer-modal-label"
              htmlFor="transfer-modal-shipper"
            >
              Shipper
            </label>
            <input
              name="transfer-modal-shipper"
              id="transfer-modal-shipper"
              className="transfer-modal-input"
              value={shipper}
              onChange={(e) => setShipper(e.target.value)}
            />
          </div>
          <div className="transfer-modal-label-container">
            <label
              className="transfer-modal-label"
              htmlFor="transfer-modal-coordinator"
            >
              Coordinator
            </label>
            <input
              name="transfer-modal-coordinator"
              id="transfer-modal-coordinator"
              className="transfer-modal-input"
              value={coordinator}
              onChange={(e) => setCoordinator(e.target.value)}
            />
          </div>

          <div className="transfer-modal-label-container">
            <label className="transfer-modal-label">
              Deadline for Additions
            </label>
            <DateTimePicker
              onChange={setAdditionsDate}
              value={additionsDate}
              disableClock={true}
              required={true}
              className={"transfer-modal-input"}
              calendarIcon={null}
              minDate={new Date()}
            />
          </div>
          <div className="transfer-modal-label-container">
            <label className="transfer-modal-label">Departure Date</label>
            <DateTimePicker
              onChange={setDepartureDate}
              value={departureDate}
              disableClock={true}
              className={"transfer-modal-input"}
              calendarIcon={null}
              minDate={new Date()}
            />
          </div>

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
        </form>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default TransferModal;
