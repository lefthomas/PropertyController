import "./GlanceBox.css";

function GlanceBox(props) {
  return (
    <div class="glance-box">
      <p class="glance-box-direction">Next truck {props.direction}</p>
      <p class="glance-box-not-booked">No Transfer currently scheduled</p>
      <button class="glance-box-btn">Book Transfer</button>
    </div>
  );
}

export default GlanceBox;
