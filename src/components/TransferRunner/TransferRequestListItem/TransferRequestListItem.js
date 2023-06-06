import "./TransferRequestListItem.css";
import { useQuery } from "@apollo/client";
import { useMediaQuery } from "react-responsive";
import TransferRequestListItemImg from "../TransferRequestListItemImg/TransferRequestListItemImg";
import { GET_OBJECT } from "../../../queries/queries";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function TransferRequestListItem({ ID, collapse }) {
  const isMobile = useMediaQuery({ maxWidth: 1000 });
  const { loading, error, data } = useQuery(GET_OBJECT, {
    variables: { id: ID },
  });
  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  if (data.getProperty.requestedProperty.length === 0)
    return (
      <p className="transfer-request-list-nothing-booked">
        No works currently booked
      </p>
    );

  if (collapse)
    return (
      <p className="transfer-request-list-nothing-booked">
        {data.getProperty.requestedProperty.length} Works Requested
      </p>
    );

  return data.getProperty.requestedProperty.map(
    ({ artist, lot, objectNumber, saleNumber, title }) => (
      <div className="transfer-request-list-item-container" key={objectNumber}>
        <TransferRequestListItemImg
          imgSrc={getRandomInt(2, 1084)}
          imgSize={isMobile ? 50 : 100}
          expandImgSize={400}
        />
        <p className="transfer-request-list-item-">
          Sale: {saleNumber} <br />
          Lot: {lot} <br />
          Object No: {objectNumber}
        </p>
        <p className="transfer-request-list-item-">
          {artist.length > 25 ? `${artist.substring(0, 25)}...` : artist} <br />
          {title.length > 25 ? `${title.substring(0, 25)}...` : title}
        </p>
        {isMobile ? null : (
          <p className="transfer-request-list-item-">
            Size
            <br />
            {getRandomInt(10, 100)}x{getRandomInt(4, 20)}x
            {getRandomInt(10, 100)}
            cm
          </p>
        )}
        {isMobile ? null : (
          <p className="transfer-request-list-item-">
            Requested by <br /> Lewis Thomas
          </p>
        )}
      </div>
    )
  );
}

export default TransferRequestListItem;
