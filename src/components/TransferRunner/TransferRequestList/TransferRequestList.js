import TransferRequestListItem from "../TransferRequestListItem/TransferRequestListItem";
import "./TransferRequestList.css";

function TransferRequestList({ ID, collapse, toggleCollapse }) {
  return (
    <div className="transfer-request-list-border">
      <p className="transfer-request-list-department">Photo Department</p>
      <p onClick={toggleCollapse} className="transfer-request-list-toggle">
        {collapse ? "Expand" : "Collapse"}
      </p>
      <TransferRequestListItem ID={ID} collapse={collapse} />
    </div>
  );
}

export default TransferRequestList;
