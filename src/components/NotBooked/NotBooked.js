import "./NotBooked.css";

function NotBooked() {
  return (
    <div className="not-booked-container">
      <p className="not-booked-info">Nothing Scheduled</p>
      <button className="not-booked-btn">Schedule New Transfer</button>
    </div>
  );
}

export default NotBooked;
