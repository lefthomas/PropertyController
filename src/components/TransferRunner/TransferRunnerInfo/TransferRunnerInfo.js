import "./TransferRunnerInfo.css";

function TransferRunnerInfo(props) {
  const departureTime = props.departureDate.split(",")[2];
  const departureDate = props.departureDate.split(",", 2);
  const additionTime = props.additionDate.split(",")[2];
  const additionDate = props.additionDate.split(",", 2);

  return (
    <div className="transfer-runner-info">
      <h1>{props.departureDate}</h1>
      <p>Coordinator: {props.coordinator}</p>
      <p>Transfer Booked via {props.shipper}</p>
      <p>
        Departing at {departureTime} on {departureDate}
      </p>
      <p className="transfer-runner-info-deadline">
        Deadline for Additions {additionTime} on {additionDate}
      </p>
    </div>
  );
}

export default TransferRunnerInfo;
