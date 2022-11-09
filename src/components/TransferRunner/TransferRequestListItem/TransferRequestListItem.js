import "./TransferRequestListItem.css";

function getRandomInt(min, max) {
  min = Math.ceil(2);
  max = Math.floor(1084);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function TransferRequestListItem() {
  return (
    <div className="transfer-request-list-item-container">
      <img
        src={`https://picsum.photos/id/${getRandomInt()}/100`}
        alt=""
        className="transfer-request-list-item-img"
      />

      <p className="transfer-request-list-item-">Object Information</p>
      <p className="transfer-request-list-item-">Artist Title</p>
      <p className="transfer-request-list-item-">Size</p>
      <p className="transfer-request-list-item-">Location</p>
      <p className="transfer-request-list-item-">Requested by</p>
    </div>
  );
}

export default TransferRequestListItem;
