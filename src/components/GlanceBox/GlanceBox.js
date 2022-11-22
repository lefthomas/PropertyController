import "./GlanceBox.css";

function GlanceBox(props) {
  if (props.transferInfo.length === 0)
    return (
      <div className="glance-box">
        <p className="glance-box-direction">Next truck {props.direction}</p>
        <p className="glance-box-not-booked">No Transfer currently scheduled</p>
        <button className="glance-box-btn">Book Transfer</button>
      </div>
    );
  return props.transferInfo.map(
    ({ shipper, additionsDate, coordinator, _id }) => (
      <div className="glance-box" key={_id}>
        <p className="glance-box-direction">Next truck {props.direction}</p>
        <p className="glance-box-text">
          {shipper} on {additionsDate}
        </p>
        <p className="glance-box-text">Coordinator: {coordinator}</p>
        <button className="glance-box-btn">Request Property</button>
      </div>
    )
  );
}

export default GlanceBox;
