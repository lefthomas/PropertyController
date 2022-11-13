import TransferModal from "../../../modals/TransferModal/TransferModal";
import "./TransferRunnerRequestBox.css";
import React, { useState } from "react";

function TransferRunnerRequestBox() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  return (
    <div className="transfer-runner-request-container">
      <button className="transfer-runner-request-btn transfer-runner-request-btn-select">
        Select
      </button>
      <button
        onClick={() => setIsOpen(true)}
        className="transfer-runner-request-btn transfer-runner-request-btn-request"
      >
        Request Work
      </button>
      <button className="transfer-runner-request-btn transfer-runner-request-btn-toggle">
        Expand / Collapse All
      </button>
      <TransferModal open={isOpen} close={handleClose} />
    </div>
  );
}

export default TransferRunnerRequestBox;
