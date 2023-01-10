import "./HoldRunner.css";
import HoldRequestListItem from "./HoldRequestListItem/HoldRequestListItem";
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
      <div className="hold-runner-container">
        <HoldRunnerRequestBox ID={_id} destLoc={destLoc} />
        <HoldRequestListItem ID={_id} destLoc={destLoc} />
      </div>
    </div>
  ));
}
export default HoldRunner;
