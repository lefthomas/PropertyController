import "./AddPropertyModalItem.css";
import TransferRequestListItemImg from "../../../components/TransferRunner/TransferRequestListItemImg/TransferRequestListItemImg";
import { memo } from "react";

function getRandomInt(min, max) {
  min = Math.ceil(2);
  max = Math.floor(1084);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function AddPropertyModalItem({ query }) {
  if (typeof query !== "undefined" && query != null) {
    return query.map(({ artist, lot, objectNumber, saleNumber, title }) => (
      <div className="transfer-request-list-item-container" key={objectNumber}>
        <TransferRequestListItemImg imgSrc={getRandomInt()} />
        <p className="transfer-request-list-item-">
          Sale: {saleNumber} <br />
          Lot: {lot} <br />
          Object No: {objectNumber}
        </p>
        <p className="transfer-request-list-item-">
          {artist} <br />
          {title}
        </p>
        <p className="transfer-request-list-item-">Size</p>
        <p className="transfer-request-list-item-">Location</p>
      </div>
    ));
  } else {
    <></>;
  }
}

export default memo(AddPropertyModalItem);
