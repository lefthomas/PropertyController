import "./TransferRequestListItemImg.css";
import { useState } from "react";

function TransferRequestListItemImg({ imgSrc, imgSize, expandImgSize }) {
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
        src={`https://picsum.photos/id/${imgSrc}/${imgSize}`}
        alt=""
        className="transfer-request-list-item-img"
      />
      <img
        className={`transfer-request-list-item-img-enlarged ${
          isHovering ? "transfer-request-list-item-img-enlarged-show" : ""
        }`}
        src={`https://picsum.photos/id/${imgSrc}/${expandImgSize}`}
        alt=""
      />
    </div>
  );
}

export default TransferRequestListItemImg;
