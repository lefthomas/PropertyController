import "./HoldRunner.css";
import HoldRequestListItem from "./HoldRequestListItem/HoldRequestListItem";
import HoldRunnerRequestBox from "./HoldRunnerRequestBox/HoldRunnerRequestBox";
import { useQuery } from "@apollo/client";
import { GET_HOLDLIST } from "../../../queries/queries";

function HoldRunner({ saleCode, destLoc }) {
  const { loading, error, data } = useQuery(GET_HOLDLIST, {
    variables: { saleCode: saleCode },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  if (data) {
    var results = data;
  }

  return results.getHoldList.map(({ _id }) => (
    <div key={_id}>
      <div className="hold-runner-container">
        <HoldRunnerRequestBox ID={_id} destLoc={destLoc} />
        <HoldRequestListItem ID={_id} destLoc={destLoc} />
      </div>
    </div>
  ));
}
export default HoldRunner;
