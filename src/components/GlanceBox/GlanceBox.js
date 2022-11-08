import "./GlanceBox.css";

function GlanceBox(props) {
  return (
    <div class="glance-box">
      <p>Next truck {props.direction}</p>
      <p>No Transfer currently scheduled</p>
      <button>Book Transfer</button>
    </div>
  );
}

export default GlanceBox;
