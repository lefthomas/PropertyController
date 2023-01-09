import HoldRequestListItem from "../HoldRequestListItem/HoldRequestListItem";
import "./HoldRequestList.css";

function HoldRequestList(props) {
  return (
    <div className="hold-request-list-border">
      <HoldRequestListItem ID={props.ID} />
    </div>
  );
}

export default HoldRequestList;
