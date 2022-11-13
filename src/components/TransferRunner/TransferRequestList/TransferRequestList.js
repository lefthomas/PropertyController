import TransferRequestListItem from "../TransferRequestListItem/TransferRequestListItem";
import "./TransferRequestList.css";

function TransferRequestList() {
  return (
    <div className="transfer-request-list-border">
      <p className="transfer-request-list-department">Department</p>
      <p className="transfer-request-list-toggle">Collapse</p>
      <TransferRequestListItem />
    </div>
  );
}

export default TransferRequestList;
