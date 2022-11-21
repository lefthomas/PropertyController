import TransferRequestListItem from "../TransferRequestListItem/TransferRequestListItem";
import "./TransferRequestList.css";

function TransferRequestList(props) {
  return (
    <div className="transfer-request-list-border">
      <p className="transfer-request-list-department">Department</p>
      <p className="transfer-request-list-toggle">Collapse</p>
      <TransferRequestListItem ID={props.ID} />
    </div>
  );
}

export default TransferRequestList;
