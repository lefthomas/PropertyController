import TransferRequestListItem from "../TransferRequestListItem/TransferRequestListItem";
import "./TransferRequestList.css";
import React, { useState } from "react";

function TransferRequestList({ ID, children }) {
  const [collapse, setCollapse] = useState(false);
  const childCount = React.Children.count(children);

  const toggle = () => {
    setCollapse(!collapse);
  };
  return (
    <div className="transfer-request-list-border">
      <p className="transfer-request-list-department">Photo Department</p>
      <p onClick={toggle} className="transfer-request-list-toggle">
        Collapse
      </p>
      {collapse ? (
        <p>{childCount} works requested</p>
      ) : (
        <TransferRequestListItem ID={ID} />
      )}
    </div>
  );
}

export default TransferRequestList;
