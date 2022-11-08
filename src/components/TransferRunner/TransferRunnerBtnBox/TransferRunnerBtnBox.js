import "./TransferRunnerBtnBox.css";

function TransferRunnerBtnBox() {
  return (
    <div class="transfer-runner-btn-container">
      <button class="transfer-runner-btn transfer-runner-btn-pick">
        Print Pick List
      </button>
      <button class="transfer-runner-btn transfer-runner-btn-email">
        Email All
      </button>
      <button class="transfer-runner-btn transfer-runner-btn-change">
        Change Transfer Details
      </button>
      <button class="transfer-runner-btn transfer-runner-btn-completed">
        Mark As Completed
      </button>
      <button class="transfer-runner-btn transfer-runner-btn-cancel">
        Cancel Transfer
      </button>
    </div>
  );
}

export default TransferRunnerBtnBox;
