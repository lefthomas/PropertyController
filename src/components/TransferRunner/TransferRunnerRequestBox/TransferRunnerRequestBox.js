import "./TransferRunnerRequestBox.css";

function TransferRunnerRequestBox() {
  return (
    <div class="transfer-runner-request-container">
      <button class="transfer-runner-request-btn transfer-runner-request-btn-select">
        Select
      </button>
      <button class="transfer-runner-request-btn transfer-runner-request-btn-request">
        Request Work
      </button>
      <button class="transfer-runner-request-btn transfer-runner-request-btn-toggle">
        Expand / Collapse All
      </button>
    </div>
  );
}

export default TransferRunnerRequestBox;
