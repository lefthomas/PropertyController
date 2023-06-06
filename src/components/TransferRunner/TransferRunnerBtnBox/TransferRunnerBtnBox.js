import CompleteModal from "../../../modals/CompleteModal/CompleteModal";
import CancelModal from "../../../modals/CancelModal/CancelModal";
import "./TransferRunnerBtnBox.css";
import { useState } from "react";

function TransferRunnerBtnBox({ ID, originLoc }) {
  const [isCancelOpen, setIsCancelOpen] = useState(false);
  const [isCompleteOpen, setIsCompleteOpen] = useState(false);

  const handleModalOpen = (modalType) => {
    // Disables Background Scrolling whilst the SideDrawer/Modal is open
    if (typeof window !== "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }

    if (modalType === "cancel") {
      setIsCancelOpen(true);
    } else if (modalType === "complete") {
      setIsCompleteOpen(true);
    }
  };

  const handleModalClose = (modalType) => {
    // Unsets Background Scrolling to use when SideDrawer/Modal is closed
    if (typeof window !== "undefined" && window.document) {
      document.body.style.overflow = "unset";
    }

    if (modalType === "cancel") {
      setIsCancelOpen(false);
    } else if (modalType === "complete") {
      setIsCompleteOpen(false);
    }
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
        onClick={() => handleModalOpen("complete")}
      >
        Mark As Completed
      </button>
      <CompleteModal
        ID={ID}
        open={isCompleteOpen}
        close={() => handleModalClose("complete")}
        originLoc={originLoc}
      />
      <button
        className="transfer-runner-btn transfer-runner-btn-cancel"
        onClick={() => handleModalOpen("cancel")}
      >
        Cancel Transfer
      </button>
      <CancelModal
        ID={ID}
        open={isCancelOpen}
        close={() => handleModalClose("cancel")}
        originLoc={originLoc}
      />
    </div>
  );
}

export default TransferRunnerBtnBox;
