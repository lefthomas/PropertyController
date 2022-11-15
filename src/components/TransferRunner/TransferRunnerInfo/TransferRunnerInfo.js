import "./TransferRunnerInfo.css";

function TransferRunnerInfo(props) {
  return (
    <div className="transfer-runner-info">
      <p>Coordinator {props.coordinator}</p>
      <p>Transfer Booked via {props.shipper}</p>
      <p>
        Departing at {props.travelTime} on {props.departureDate}
      </p>
      <p className="transfer-runner-info-deadline">
        Deadline for additions {props.additionTime} on {props.additionDate}
      </p>
    </div>
  );
}

export default TransferRunnerInfo;
