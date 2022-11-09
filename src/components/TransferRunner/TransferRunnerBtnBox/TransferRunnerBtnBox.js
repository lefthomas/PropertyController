import "./TransferRunnerBtnBox.css";

function TransferRunnerBtnBox() {
  return (
    <div className="transfer-runner-btn-container">
      <button className="transfer-runner-btn transfer-runner-btn-pick">
        Print Pick List
      </button>
      <button className="transfer-runner-btn transfer-runner-btn-email">
        Email All
      </button>
      <button className="transfer-runner-btn transfer-runner-btn-change">
        Change Transfer Details
      </button>
      <button className="transfer-runner-btn transfer-runner-btn-completed">
        Mark As Completed
      </button>
      <button className="transfer-runner-btn transfer-runner-btn-cancel">
        Cancel Transfer
      </button>
    </div>
  );
}

export default TransferRunnerBtnBox;
