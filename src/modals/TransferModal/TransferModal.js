import "./TransferModal.css";
import ReactDom from "react-dom";

function TransferModal(props) {
  if (!props.open) return null;
  return ReactDom.createPortal(
    <div className="transfer-request-list-overlay">
      <form className="transfer-request-list-form">
        <label>
          Shipper:
          <input name="transfer-shipper" />
        </label>
        <label>
          Coordinator:
          <input name="transfer-coordinator" />
        </label>
        <label>
          deadline for additions date:
          <input type="date" name="additions-date" />
        </label>
        <label>
          Deadline for additions time:
          <input type="time" name="additions-time" />
        </label>
        <label>
          Delivery Date:
          <input type="date" name="delivery-date" />
        </label>
        <label>
          Delivery Time:
          <input type="time" name="delivery-time" />
        </label>
        <button onClick={() => props.close()}>Close</button>
      </form>
    </div>,
    document.getElementById("portal")
  );
}

export default TransferModal;
