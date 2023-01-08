import TransferRequestListItem from "../TransferRequestListItem/TransferRequestListItem";
import "./TransferRequestList.css";

function TransferRequestList(props) {
  return (
    <div className="transfer-request-list-border">
      <TransferRequestListItem ID={props.ID} />
    </div>
  );
}

export default TransferRequestList;
