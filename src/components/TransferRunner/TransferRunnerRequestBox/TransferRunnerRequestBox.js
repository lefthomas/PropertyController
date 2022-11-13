import TransferModal from "../../../modals/TransferModal/TransferModal";
import "./TransferRunnerRequestBox.css";
import React, { useState } from "react";

function TransferRunnerRequestBox() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    // Disables Background Scrolling whilst the SideDrawer/Modal is open
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };
  const handleClose = () => {
    setIsOpen(false);
    // Unsets Background Scrolling to use when SideDrawer/Modal is closed
    document.body.style.overflow = "unset";
  };

  return (
    <div className="transfer-runner-request-container">
      <button className="transfer-runner-request-btn transfer-runner-request-btn-select">
        Select
      </button>
      <button
        onClick={handleOpen}
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
