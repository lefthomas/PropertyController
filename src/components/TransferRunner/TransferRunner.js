import "./TransferRunner.css";
import TransferRunnerInfo from "./TransferRunnerInfo/TransferRunnerInfo";
import TransferRunnerBtnBox from "./TransferRunnerBtnBox/TransferRunnerBtnBox";
import TransferRunnerRequestBox from "./TransferRunnerRequestBox/TransferRunnerRequestBox";
import TransferRequestList from "./TransferRequestList/TransferRequestList";
import { useQuery, gql } from "@apollo/client";

const GET_TRANSFERS = gql`
  query GetTransfers {
    getTransfers {
      shipper
      coordinator
      additionsDate
      departureDate
      complete
    }
  }
`;

function TransferRunner() {
  const { loading, error, data } = useQuery(GET_TRANSFERS);

  // function transferCompleteBooleanCheck() {
  //   data.getTransfers.filter((transfer) => {
  //     const complete = transfer.complete;
  //     return complete;
  //   });
  // }

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  // if (
  //   data.getTransfers === undefined ||
  //   transferCompleteBooleanCheck() === true
  // )
  // return;
  // <p className="not-booked-info">Nothing Scheduled</p>;

  return data.getTransfers.map(
    ({ shipper, coordinator, additionsDate, departureDate }) => (
      <div className="transfer-runner-container">
        <TransferRunnerInfo
          coordinator={coordinator}
          shipper={shipper}
          additionDate={additionsDate}
          departureDate={departureDate}
        />
        <TransferRunnerBtnBox />
        <TransferRunnerRequestBox />
        <TransferRequestList />
      </div>
    )
  );
}

export default TransferRunner;
