import CancelModal from "../../../modals/CancelModal/CancelModal";
import "./TransferRunnerBtnBox.css";
import { useState } from "react";

function TransferRunnerBtnBox({ ID, originLoc }) {
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
    <div className="transfer-runner-btn-container">
      <button className="transfer-runner-btn transfer-runner-btn-pick">
        Print Pick List
      </button>
      <button className="transfer-runner-btn transfer-runner-btn-email">
        Email All
      </button>
      <button className="transfer-runner-btn transfer-runner-btn-change">
        Change Transfer Details
      </button>
      <button className="transfer-runner-btn transfer-runner-btn-completed">
        Mark As Completed
      </button>
      <button
        className="transfer-runner-btn transfer-runner-btn-cancel-btn transfer-runner-btn-cancel"
        onClick={handleOpen}
      >
        Cancel Transfer
      </button>
      <CancelModal
        ID={ID}
        open={isOpen}
        close={handleClose}
        originLoc={originLoc}
      />
    </div>
  );
}

export default TransferRunnerBtnBox;
