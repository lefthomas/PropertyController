import "./CompleteModal.css";
import ReactDom from "react-dom";
import { useMutation } from "@apollo/client";
import { GET_TRANSFERS, GET_GLANCE_BOX } from "../../queries/queries";
import { CANCEL_TRANSFER } from "../../mutations/mutations";

function CompleteModal({ originLoc, ID, close, open }) {
  const [addWorksToHold] = useMutation(CANCEL_TRANSFER, {
    refetchQueries: [
      { query: GET_TRANSFERS, variables: { originLocation: originLoc } },
      { query: GET_GLANCE_BOX, variables: { LWH: "LWH", BSQ: "BSQ" } },
    ],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    addWorksToHold({
      variables: {
        id: ID,
      },
    });

    close();
  };

  if (!open) return null;

  return ReactDom.createPortal(
    // Form tag was causing an inconsistent focus error in Chrome that was causing submit to fail randomly so changed to div

    <div className="complete-modal-overlay">
      <div className="complete-modal-container">
        <h1 className="complete-modal-header">Mark Transfer as Complete?</h1>
        <p className="complete-modal-text">
          Mark transfer as complete and move to archive?
        </p>
        <div className="complete-modal-btn-div">
          <button
            type="submit"
            className="complete-modal-btn complete-modal-btn-confirm"
            onClick={handleSubmit}
          >
            Confirm
          </button>
          <button
            type="button"
            className="complete-modal-btn complete-modal-btn-complete"
            onClick={() => {
              close();
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default CompleteModal;
