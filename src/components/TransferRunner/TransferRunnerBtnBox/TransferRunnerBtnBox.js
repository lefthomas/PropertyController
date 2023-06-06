import CompleteModal from "../../../modals/CompleteModal/CompleteModal";
import CancelModal from "../../../modals/CancelModal/CancelModal";
import "./TransferRunnerBtnBox.css";
import { useState } from "react";

function TransferRunnerBtnBox({ ID, originLoc }) {
  const [isCancelOpen, setIsCancelOpen] = useState(false);
  const [isCompleteOpen, setIsCompleteOpen] = useState(false);

  const handleCancelOpen = () => {
    setIsCancelOpen(true);
    // Disables Background Scrolling whilst the SideDrawer/Modal is open
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };
  const handleCancelClose = () => {
    setIsCancelOpen(false);
    // Unsets Background Scrolling to use when SideDrawer/Modal is closed
    document.body.style.overflow = "unset";
  };

  const handleCompleteOpen = () => {
    setIsCompleteOpen(true);
    // Disables Background Scrolling whilst the SideDrawer/Modal is open
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };
  const handleCompleteClose = () => {
    setIsCompleteOpen(false);
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
      <button
        className="transfer-runner-btn transfer-runner-btn-completed"
        onClick={handleCompleteOpen}
      >
        Mark As Completed
      </button>
      <CompleteModal
        ID={ID}
        open={isCompleteOpen}
        close={handleCompleteClose}
        originLoc={originLoc}
      />
      <button
        className="transfer-runner-btn transfer-runner-btn-cancel"
        onClick={handleCancelOpen}
      >
        Cancel Transfer
      </button>
      <CancelModal
        ID={ID}
        open={isCancelOpen}
        close={handleCancelClose}
        originLoc={originLoc}
      />
    </div>
  );
}

export default TransferRunnerBtnBox;
