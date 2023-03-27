import TransferRequestListItem from "../TransferRequestListItem/TransferRequestListItem";
import "./TransferRequestList.css";

function TransferRequestList({ ID }) {
  return (
    <div className="transfer-request-list-border">
      <TransferRequestListItem ID={ID} />
    </div>
  );
}

export default TransferRequestList;
