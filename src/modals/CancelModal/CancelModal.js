import "./CancelModal.css";
import ReactDom from "react-dom";
import { gql, useMutation } from "@apollo/client";
import { GET_TRANSFERS, GET_GLANCE_BOX } from "../../queries/queries";

const CANCEL_TRANSFER = gql`
  mutation Mutation($id: ID) {
    deleteTransfer(ID: $id)
  }
`;

function CancelModal(props) {
  const [addWorksToHold] = useMutation(CANCEL_TRANSFER, {
    refetchQueries: [
      { query: GET_TRANSFERS, variables: { originLocation: props.originLoc } },
      { query: GET_GLANCE_BOX, variables: { LWH: "LWH", BSQ: "BSQ" } },
    ],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    addWorksToHold({
      variables: {
        id: props.ID,
      },
    });

    props.close();
  };

  if (!props.open) return null;

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
              props.close();
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
