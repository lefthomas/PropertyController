import "./NotBooked.css";

function NotBooked() {
  return (
    <div className="not-booked-container">
      <heading className="not-booked-info">Nothing Scheduled</heading>
      <button className="not-booked-btn">Schedule New Transfer</button>
    </div>
  );
}

export default NotBooked;
