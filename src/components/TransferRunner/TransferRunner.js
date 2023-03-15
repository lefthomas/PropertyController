import "./TransferRunner.css";
import TransferRunnerInfo from "./TransferRunnerInfo/TransferRunnerInfo";
import TransferRunnerBtnBox from "./TransferRunnerBtnBox/TransferRunnerBtnBox";
import TransferRunnerRequestBox from "./TransferRunnerRequestBox/TransferRunnerRequestBox";
import TransferRequestList from "./TransferRequestList/TransferRequestList";
import { useQuery } from "@apollo/client";
import { GET_TRANSFERS } from "../../queries/queries";

function TransferRunner({ originLoc }) {
  const { loading, error, data } = useQuery(GET_TRANSFERS, {
    variables: { originLocation: originLoc },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  if (originLoc === "Archive" && data.getTransfers.length === 0)
    return <p className="not-booked-info">No Archived Shipments</p>;

  if (data.getTransfers.length === 0)
    return (
      <div>
        <p className="not-booked-info">Nothing Scheduled</p>
      </div>
    );

  return data.getTransfers.map(
    ({ shipper, coordinator, additionsDate, departureDate, _id }) => (
      <div key={_id}>
        <div className="transfer-runner-container">
          <TransferRunnerInfo
            coordinator={coordinator}
            shipper={shipper}
            additionDate={additionsDate}
            departureDate={departureDate}
          />
          <TransferRunnerBtnBox ID={_id} originLoc={originLoc} />
          <TransferRunnerRequestBox ID={_id} />
          <TransferRequestList ID={_id} />
        </div>
        {/* {originLoc !== "Archive" && <BookTransfer originLoc={originLoc} />} */}
      </div>
    )
  );
}

export default TransferRunner;
