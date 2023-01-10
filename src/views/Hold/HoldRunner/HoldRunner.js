import "./HoldRunner.css";
import HoldRequestList from "./HoldRequestList/HoldRequestList";
import HoldRunnerRequestBox from "./HoldRunnerRequestBox/HoldRunnerRequestBox";
import { gql, useQuery } from "@apollo/client";

const GET_HOLDLIST = gql`
  query GetHoldList($saleCode: String) {
    getHoldList(saleCode: $saleCode) {
      _id
    }
  }
`;

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
      <HoldRunnerRequestBox ID={_id} destLoc={destLoc} />
      <div className="hold-runner-container">
        <HoldRequestList ID={_id} destLoc={destLoc} />
      </div>
    </div>
  ));
}
export default HoldRunner;
