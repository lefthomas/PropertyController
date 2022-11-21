import AddPropertyModal from "../../../modals/AddPropertyModal/AddPropertyModal";
import React, { useState } from "react";
import "./TransferRunnerRequestBox.css";

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
        className="transfer-runner-request-btn transfer-runner-request-btn-request"
        onClick={handleOpen}
      >
        Request Work
      </button>
      <AddPropertyModal open={isOpen} close={handleClose} />
      <button className="transfer-runner-request-btn transfer-runner-request-btn-toggle">
        Expand / Collapse All
      </button>
    </div>
  );
}

export default TransferRunnerRequestBox;
