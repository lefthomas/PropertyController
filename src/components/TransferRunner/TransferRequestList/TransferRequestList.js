import TransferRequestListItem from "../TransferRequestListItem/TransferRequestListItem";
import "./TransferRequestList.css";

function TransferRequestList() {
  return (
    <div class="transfer-request-list-border">
      <p class="transfer-request-list-department">Department</p>
      <p class="transfer-request-list-toggle">Collapse</p>
      <TransferRequestListItem />
      <TransferRequestListItem />
      <TransferRequestListItem />
    </div>
  );
}

export default TransferRequestList;
