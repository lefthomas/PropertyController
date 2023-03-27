import "./GlanceBox.css";
import BookTransfer from "../BookTransfer/BookTransfer";
import AddPropertyModal from "../../modals/AddPropertyModal/AddPropertyModal";
import { useState } from "react";

function GlanceBox({ direction, transferInfo, originLoc }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    // Disables Background Scrolling whilst the SideDrawer/Modal is open
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };
  const handleClose = () => {
    setIsOpen(false);
    // Unsets Background Scrolling to use when SideDrawer/Modal is closed
    document.body.style.overflow = "unset";
  };

  if (transferInfo.length === 0)
    return (
      <div className="glance-box">
        <p className="glance-box-direction">Next truck {direction}</p>
        <p className="glance-box-not-booked">No Transfer currently scheduled</p>
        <BookTransfer originLoc={originLoc} glanceBox={"glanceBox"} />
      </div>
    );
  return transferInfo.map(({ shipper, additionsDate, coordinator, _id }) => (
    <div className="glance-box" key={_id}>
      <p className="glance-box-direction">Next truck {direction}</p>
      <p className="glance-box-text">
        {shipper} on {additionsDate}
      </p>
      <p className="glance-box-text">Coordinator: {coordinator}</p>
      <button className="glance-box-btn" onClick={handleOpen}>
        Request Work
      </button>
      <AddPropertyModal ID={_id} open={isOpen} close={handleClose} />
    </div>
  ));
}

export default GlanceBox;
