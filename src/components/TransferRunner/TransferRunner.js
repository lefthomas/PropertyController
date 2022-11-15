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

  if (loading) return <p>Loading...</p>;

  // if (data.complete === false)
  //   return <p className="not-booked-info">Nothing Scheduled</p>;

  if (error) return <p>Error</p>;

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
