import "./TransferRequestListItemImg.css";
import { useState } from "react";

function TransferRequestListItemImg(props) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
      className="transfer-request-list-item-img-thumbnail"
    >
      <img
        src={`https://picsum.photos/id/${props.imgSrc}/100`}
        alt=""
        className="transfer-request-list-item-img"
      />
      <img
        className={`transfer-request-list-item-img-enlarged ${
          isHovering ? "transfer-request-list-item-img-enlarged-show" : ""
        }`}
        src={`https://picsum.photos/id/${props.imgSrc}/400`}
        alt=""
      />
    </div>
  );
}

export default TransferRequestListItemImg;
