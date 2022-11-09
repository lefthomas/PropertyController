import "./GlanceBox.css";

function GlanceBox(props) {
  return (
    <div className="glance-box">
      <p className="glance-box-direction">Next truck {props.direction}</p>
      <p className="glance-box-not-booked">No Transfer currently scheduled</p>
      <button className="glance-box-btn">Book Transfer</button>
    </div>
  );
}

export default GlanceBox;
