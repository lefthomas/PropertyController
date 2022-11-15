import "./TransferRunner.css";
import TransferRunnerInfo from "./TransferRunnerInfo/TransferRunnerInfo";
import TransferRunnerBtnBox from "./TransferRunnerBtnBox/TransferRunnerBtnBox";
import TransferRunnerRequestBox from "./TransferRunnerRequestBox/TransferRunnerRequestBox";
import TransferRequestList from "./TransferRequestList/TransferRequestList";

function TransferRunner() {
  // TODO add in handling for nothing booked

  // if (!transferID && transfer.complete = false) return(
  //   <p className="not-booked-info">Nothing Scheduled</p>
  // );
  return (
    <div className="transfer-runner-container">
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
      <TransferRequestList />
    </div>
  );
}

export default TransferRunner;
