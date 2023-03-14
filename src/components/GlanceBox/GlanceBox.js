import "./GlanceBox.css";
import BookTransfer from "../BookTransfer/BookTransfer";

function GlanceBox({ direction, transferInfo, originLoc }) {
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
      <button className="glance-box-btn">Request Property</button>
    </div>
  ));
}

export default GlanceBox;
