import "./TransferRequestListItem.css";
import { useQuery, gql } from "@apollo/client";

const GET_OBJECT = gql`
  query GetProperty($amount: Int) {
    getProperty(amount: $amount) {
      artist
      lot
      objectNumber
      saleNumber
      title
    }
  }
`;

function getRandomInt(min, max) {
  min = Math.ceil(2);
  max = Math.floor(1084);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function TransferRequestListItem() {
  const { loading, error, data } = useQuery(GET_OBJECT, {
    variables: { amount: 3 },
  });
  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  return data.getProperty.map(
    ({ artist, lot, objectNumber, saleNumber, title }) => (
      <div className="transfer-request-list-item-container">
        <img
          src={`https://picsum.photos/id/${getRandomInt()}/100`}
          alt=""
          className="transfer-request-list-item-img"
        />
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
        <p className="transfer-request-list-item-">
          Requested by <br /> Lewis Thomas
        </p>
      </div>
    )
  );
}

export default TransferRequestListItem;
