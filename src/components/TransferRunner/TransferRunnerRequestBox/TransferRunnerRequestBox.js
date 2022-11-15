import "./TransferRunnerRequestBox.css";

function TransferRunnerRequestBox() {
  return (
    <div className="transfer-runner-request-container">
      <button className="transfer-runner-request-btn transfer-runner-request-btn-select">
        Select
      </button>
      <button className="transfer-runner-request-btn transfer-runner-request-btn-request">
        Request Work
      </button>
      <button className="transfer-runner-request-btn transfer-runner-request-btn-toggle">
        Expand / Collapse All
      </button>
    </div>
  );
}

export default TransferRunnerRequestBox;
