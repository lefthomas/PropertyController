import "./AddPropertyModalItem.css";
import TransferRequestListItemImg from "../../../components/TransferRunner/TransferRequestListItemImg/TransferRequestListItemImg";
import { useQuery, gql } from "@apollo/client";
import { memo } from "react";

const GET_OBJECT = gql`
  query GetPropertyByObject($objectNumbers: [String]) {
    getPropertyByObject(objectNumbers: $objectNumbers) {
      artist
      lot
      objectNumber
      title
      saleNumber
    }
  }
`;

function getRandomInt(min, max) {
  min = Math.ceil(2);
  max = Math.floor(1084);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function AddPropertyModalItem(props) {
  const { loading, error, data } = useQuery(GET_OBJECT, {
    variables: { objectNumbers: props.objectNumber },
  });
  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  return data.getPropertyByObject.map(
    ({ artist, lot, objectNumber, saleNumber, title }) => (
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
    )
  );
}

export default memo(AddPropertyModalItem);
