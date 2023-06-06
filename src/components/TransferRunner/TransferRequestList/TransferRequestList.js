import TransferRequestListItem from "../TransferRequestListItem/TransferRequestListItem";
import "./TransferRequestList.css";
import React, { useState } from "react";

function TransferRequestList({ ID, children }) {
  const [collapse, setCollapse] = useState(false);

  const toggle = () => {
    setCollapse(!collapse);
  };
  return (
    <div className="transfer-request-list-border">
      <p className="transfer-request-list-department">Photo Department</p>
      <p onClick={toggle} className="transfer-request-list-toggle">
        {collapse ? "Expand" : "Collapse"}
      </p>
      <TransferRequestListItem ID={ID} collapse={collapse} />
    </div>
  );
}

export default TransferRequestList;
