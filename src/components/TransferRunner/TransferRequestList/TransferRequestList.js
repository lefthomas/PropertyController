import TransferRequestListItem from "../TransferRequestListItem/TransferRequestListItem";
import "./TransferRequestList.css";
import { useMediaQuery } from "react-responsive";

function TransferRequestList({ ID, collapse, toggleCollapse }) {
  const isMobile = useMediaQuery({ maxWidth: 1000 });
  return (
    <div className="transfer-request-list-border">
      {isMobile ? null : (
        <div>
          {" "}
          <p className="transfer-request-list-department">Photo Department</p>
          <p onClick={toggleCollapse} className="transfer-request-list-toggle">
            {collapse ? "Expand" : "Collapse"}
          </p>
        </div>
      )}
      <TransferRequestListItem ID={ID} collapse={collapse} />
    </div>
  );
}

export default TransferRequestList;
