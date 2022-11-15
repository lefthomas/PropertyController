import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import "./TransferModal.css";
import ReactDom from "react-dom";

function TransferModal(props) {
  const [shipper, setShipper] = useState("");
  const [coordinator, setCoordinator] = useState("");
  const [additionsDate, setAdditionsDate] = useState("");
  const [additionsTime, setAdditionsTime] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");

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

    newTransfer({ variables: { shipper: shipper, coordinator: coordinator } });

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
            <label
              className="transfer-modal-label"
              htmlFor="transfer-modal-additions-date"
            >
              Deadline for additions date
            </label>
            <input
              type="date"
              name="transfer-modal-additions-date"
              id="transfer-modal-additions-date"
              className="transfer-modal-input"
              value={additionsDate}
              onChange={(e) => setAdditionsDate(e.target.value)}
            />
          </div>
          <div className="transfer-modal-label-container">
            <label
              className="transfer-modal-label"
              htmlFor="transfer-modal-additions-time"
            >
              Deadline for additions time
            </label>
            <input
              type="time"
              name="transfer-modal-additions-time"
              id="transfer-modal-additions-time"
              className="transfer-modal-input"
              value={additionsTime}
              onChange={(e) => setAdditionsTime(e.target.value)}
            />
          </div>
          <div className="transfer-modal-label-container">
            <label
              className="transfer-modal-label"
              htmlFor="transfer-modal-delivery-date"
            >
              Delivery Date
            </label>
            <input
              type="date"
              name="transfer-modal-delivery-date"
              id="transfer-modal-delivery-date"
              className="transfer-modal-input"
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
            />
          </div>
          <div className="transfer-modal-label-container">
            <label
              className="transfer-modal-label"
              htmlFor="transfer-modal-delivery-time"
            >
              Delivery Time
            </label>
            <input
              type="time"
              name="transfer-modal-delivery-time"
              id="transfer-modal-delivery-time"
              className="transfer-modal-input"
              value={deliveryTime}
              onChange={(e) => setDeliveryTime(e.target.value)}
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
