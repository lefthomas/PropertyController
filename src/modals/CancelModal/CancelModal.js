import "./CancelModal.css";
import ReactDom from "react-dom";
import { useMutation } from "@apollo/client";
import { GET_TRANSFERS, GET_GLANCE_BOX } from "../../queries/queries";
import { CANCEL_TRANSFER } from "../../mutations/mutations";

function CancelModal({ originLoc, ID, close, open }) {
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

    <div className="cancel-modal-overlay">
      <div className="cancel-modal-container">
        <h1 className="cancel-modal-header">Cancel Transfer</h1>
        <p className="cancel-modal-text">
          Are you sure you want to cancel this transfer and notify the
          requester?
        </p>
        <div className="cancel-modal-btn-div">
          <button
            type="submit"
            className="cancel-modal-btn cancel-modal-btn-confirm"
            onClick={handleSubmit}
          >
            Confirm Cancel
          </button>
          <button
            type="button"
            className="cancel-modal-btn cancel-modal-btn-cancel"
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

export default CancelModal;
