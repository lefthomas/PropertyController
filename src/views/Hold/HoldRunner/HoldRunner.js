import "./HoldRunner.css";
import HoldRequestList from "./HoldRequestList/HoldRequestList";
import HoldRunnerRequestBox from "./HoldRunnerRequestBox/HoldRunnerRequestBox";
import { gql, useQuery } from "@apollo/client";

const GET_TRANSFERS = gql`
  query GetTransfers($originLocation: String) {
    getTransfers(originLocation: $originLocation) {
      _id
      additionsDate
      complete
      coordinator
      departureDate
      shipper
    }
  }
`;

function HoldRunner({ holdLoc, originLoc }) {
  const { loading, error, data } = useQuery(GET_TRANSFERS, {
    variables: { originLocation: originLoc },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  return data.getTransfers.map(({ _id }) => (
    <div key={_id}>
      <HoldRunnerRequestBox ID={_id} />
      <div className="hold-runner-container">
        <HoldRequestList ID={_id} />
      </div>
    </div>
  ));
}
export default HoldRunner;
