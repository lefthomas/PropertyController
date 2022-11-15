import "./BookTransfer.css";
import React, { useState } from "react";
import TransferModal from "../../modals/TransferModal/TransferModal";

function BookTransfer(props) {
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
    <div className="not-booked-container">
      <button className="not-booked-btn" onClick={handleOpen}>
        Schedule New Transfer
      </button>
      <TransferModal
        open={isOpen}
        close={handleClose}
        originLoc={props.originLoc}
      />
    </div>
  );
}

export default BookTransfer;
