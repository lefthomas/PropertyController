import "./AddPropertyModalItem.css";
import TransferRequestListItemImg from "../../../components/TransferRunner/TransferRequestListItemImg/TransferRequestListItemImg";
import { memo } from "react";
import { useMutation } from "@apollo/client";
import { ADD_WORKS_TO_TRANSFER } from "../../../mutations/mutations";
import { GET_OBJECT } from "../../../queries/queries";

function getRandomInt(min, max) {
  min = Math.ceil(2);
  max = Math.floor(1084);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function AddPropertyModalItem({ query, ID, clear }) {
  const [addWorksToTransfer] = useMutation(ADD_WORKS_TO_TRANSFER, {
    refetchQueries: [{ query: GET_OBJECT, variables: { id: ID } }],
  });
  const addPropertyToTransfer = (e) => {
    e.preventDefault();
    query.map(
      ({ artist, lot, objectNumber, saleNumber, title }) =>
        addWorksToTransfer({
          variables: {
            id: ID,
            transferInput: {
              requestedProperty: [
                {
                  artist: artist,
                  lot: lot,
                  objectNumber: objectNumber,
                  saleNumber: saleNumber,
                  title: title,
                },
              ],
            },
          },
        }),
      clear()
    );
  };
  if (typeof query !== "undefined" && query != null) {
    return query.map(({ artist, lot, objectNumber, saleNumber, title }) => (
      <div className="property-modal-list-item-container" key={objectNumber}>
        <TransferRequestListItemImg
          imgSrc={getRandomInt()}
          imgSize={50}
          expandImgSize={200}
        />
        <p className="property-modal-list-item">
          Sale: {saleNumber} <br />
          Lot: {lot} <br />
          Object No: {objectNumber}
        </p>
        <p className="property-modal-list-item">
          {artist.length > 25 ? `${artist.substring(0, 25)}...` : artist} <br />
          {title.length > 25 ? `${title.substring(0, 25)}...` : title}
        </p>
        <p className="property-modal-list-item">
          Size
          <br />
          10x10x10cm
        </p>
        <p className="property-modal-list-item">Location</p>
        <button
          className="property-modal-list-btn"
          type="submit"
          onClick={addPropertyToTransfer}
        >
          Add to Transfer
        </button>
      </div>
    ));
  } else {
    <></>;
  }
}

export default memo(AddPropertyModalItem);
