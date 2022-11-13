import "./TransferModal.css";
import ReactDom from "react-dom";

function TransferModal(props) {
  if (!props.open) return null;
  return ReactDom.createPortal(
    <div className="transfer-modal-overlay">
      <div className="transfer-modal-container">
        <h2 className="transfer-modal-header">Schedule New Transfer</h2>
        <form className="transfer-modal-form">
          <div className="transfer-modal-label-container">
            <label
              className="transfer-modal-label"
              for="transfer-modal-shipper"
            >
              Shipper
            </label>
            <input
              name="transfer-modal-shipper"
              id="transfer-modal-shipper"
              className="transfer-modal-input"
            />
          </div>
          <div className="transfer-modal-label-container">
            <label
              className="transfer-modal-label"
              for="transfer-modal-coordinator"
            >
              Coordinator
            </label>
            <input
              name="transfer-modal-coordinator"
              id="transfer-modal-coordinator"
              className="transfer-modal-input"
            />
          </div>
          <div className="transfer-modal-label-container">
            <label
              className="transfer-modal-label"
              for="transfer-modal-additions-date"
            >
              deadline for additions date
            </label>
            <input
              type="date"
              name="transfer-modal-additions-date"
              id="transfer-modal-additions-date"
              className="transfer-modal-input"
            />
          </div>
          <div className="transfer-modal-label-container">
            <label
              className="transfer-modal-label"
              for="transfer-modal-additions-time"
            >
              Deadline for additions time
            </label>
            <input
              type="time"
              name="transfer-modal-additions-time"
              id="transfer-modal-additions-time"
              className="transfer-modal-input"
            />
          </div>
          <div className="transfer-modal-label-container">
            <label
              className="transfer-modal-label"
              for="transfer-modal-delivery-date"
            >
              Delivery Date
            </label>
            <input
              type="date"
              name="transfer-modal-delivery-date"
              id="transfer-modal-delivery-date"
              className="transfer-modal-input"
            />
          </div>
          <div className="transfer-modal-label-container">
            <label
              className="transfer-modal-label"
              for="transfer-modal-delivery-time"
            >
              Delivery Time
            </label>
            <input
              type="time"
              name="transfer-modal-delivery-time"
              id="transfer-modal-delivery-time"
              className="transfer-modal-input"
            />
          </div>
          <button className="transfer-modal-btn transfer-modal-btn-confirm">
            Confirm
          </button>
          <button
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
