import "./TransferModal.css";
import React, { useState } from "react";

function TransferModal(props) {
  if (!props.open) return null;
  return (
    <form className="transfer-request-list-border">
      <label>
        Shipper:
        <input name="transfer-shipper" />
      </label>
      <label>
        Coordinator:
        <input name="transfer-coordinator" />
      </label>
      <label>
        Collection Date:
        <input type="date" name="collection-date" />
      </label>
      <label>
        Collection Time:
        <input type="time" name="collection-time" />
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
  );
}

export default TransferModal;
