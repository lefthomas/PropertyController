import "./HoldRequestListItem.css";
import { useQuery, gql } from "@apollo/client";
import TransferRequestListItemImg from "../../../../components/TransferRunner/TransferRequestListItemImg/TransferRequestListItemImg";

const GET_OBJECT = gql`
  query Query($id: ID!) {
    getHoldProperty(ID: $id) {
      requestedProperty {
        artist
        keepLoc
        lot
        markHeld
        newRequest
        objectNumber
        title
        saleNumber
      }
    }
  }
`;

function getRandomInt(min, max) {
  min = Math.ceil(2);
  max = Math.floor(1084);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function HoldRequestListItem({ ID, destLoc }) {
  const { loading, error, data } = useQuery(GET_OBJECT, {
    variables: { id: `${ID}` },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  const filteredItems = data.getHoldProperty.requestedProperty.filter((t) => {
    return t.keepLoc === destLoc;
  });

  if (filteredItems.length === 0)
    return (
      <p className="hold-request-list-nothing-booked">
        No works currently booked
      </p>
    );

  return filteredItems.map(({ artist, lot, objectNumber, title }) => (
    <div className="hold-request-list-item-container" key={objectNumber}>
      <TransferRequestListItemImg imgSrc={getRandomInt()} />
      <p className="hold-request-list-item-">
        Lot: {lot} <br />
        Object No: {objectNumber}
      </p>
      <p className="hold-request-list-item-">
        {artist} <br />
        {title}
      </p>
      <p className="hold-request-list-item-">Size</p>
      <p className="hold-request-list-item-">Location</p>
      <p className="hold-request-list-item-">
        Requested by <br /> Lewis Thomas
      </p>
    </div>
  ));
}

export default HoldRequestListItem;
