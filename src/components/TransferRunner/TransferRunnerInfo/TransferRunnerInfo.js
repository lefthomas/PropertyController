import "./TransferRunnerInfo.css";

function TransferRunnerInfo(props) {
  return (
    <div className="transfer-runner-info">
      <p>Coordinator {props.coordinator}</p>
      <p>Transfer Booked via {props.shipper}</p>
      <p>
        Traveling at {props.travelTime} on {props.travelDate}
      </p>
      <p>
        Deadline for additions {props.additionTime} on {props.additionDate}
      </p>
    </div>
  );
}

export default TransferRunnerInfo;
