import AddPropertyModal from "../../../../modals/AddPropertyModal/AddPropertyModal";
import React, { useState } from "react";
import "./HoldRunnerRequestBox.css";

function HoldRunnerRequestBox({ ID, destLoc }) {
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
    <div className="hold-runner-request-container">
      <button
        className="hold-runner-request-btn hold-runner-request-btn-request"
        onClick={handleOpen}
      >
        Request Work
      </button>
      <AddPropertyModal
        ID={ID}
        open={isOpen}
        close={handleClose}
        origin={"HOLD"}
        destLoc={destLoc}
      />
    </div>
  );
}

export default HoldRunnerRequestBox;
