import "./HoldRequestListItem.css";
import { useQuery, gql } from "@apollo/client";
import TransferRequestListItemImg from "../../../../components/TransferRunner/TransferRequestListItemImg/TransferRequestListItemImg";
import { useState } from "react";

const GET_OBJECT = gql`
  query Property($id: ID!) {
    getProperty(ID: $id) {
      requestedProperty {
        artist
        lot
        objectNumber
        saleNumber
        title
      }
    }
  }
`;

function getRandomInt(min, max) {
  min = Math.ceil(2);
  max = Math.floor(1084);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function HoldRequestListItem(props) {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  const { loading, error, data } = useQuery(GET_OBJECT, {
    variables: { id: `${props.ID}` },
  });
  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  if (data.getProperty.requestedProperty.length === 0)
    return (
      <p className="hold-request-list-nothing-booked">
        No works currently booked
      </p>
    );

  return data.getProperty.requestedProperty.map(
    ({ artist, lot, objectNumber, saleNumber, title }) => (
      <div
        className={
          isActive
            ? "hold-request-list-held"
            : "hold-request-list-item-container"
        }
        key={objectNumber}
      >
        {/* <p className="hold-request-list-department">Department</p>
<p className="hold-request-list-toggle">Collapse</p> */}
        <TransferRequestListItemImg imgSrc={getRandomInt()} />
        <p className="hold-request-list-item-">
          Sale: {saleNumber} <br />
          Lot: {lot} <br />
          Object No: {objectNumber}
        </p>
        <p className="hold-request-list-item-">
          {artist} <br />
          {title}
        </p>
        <p className="hold-request-list-item-">
          Requested by <br /> Lewis Thomas
        </p>
        <button className="hold-request-list-hold-btn " onClick={toggleClass}>
          Mark as Held
        </button>
      </div>
    )
  );
}

export default HoldRequestListItem;
