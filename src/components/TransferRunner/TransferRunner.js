import "./TransferRunner.css";
import TransferRunnerInfo from "./TransferRunnerInfo/TransferRunnerInfo";
import TransferRunnerBtnBox from "./TransferRunnerBtnBox/TransferRunnerBtnBox";
import TransferRunnerRequestBox from "./TransferRunnerRequestBox/TransferRunnerRequestBox";

function TransferRunner() {
  return (
    <div class="transfer-runner-container">
      <TransferRunnerInfo
        coordinator={"Lewis Thomas"}
        shipper={"Met"}
        travelTime={"9:00am"}
        travelDate={"28/02/2023"}
        additionTime={"4:00pm"}
        additionDate={"27/02/2023"}
      />
      <TransferRunnerBtnBox />
      <TransferRunnerRequestBox />
      <div class="transfer-runner-list">
        <div class="transfer-runner-list-item"></div>
      </div>
    </div>
  );
}

export default TransferRunner;
