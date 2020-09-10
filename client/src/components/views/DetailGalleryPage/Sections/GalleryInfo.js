import React, { useEffect, useState } from "react";

function GalleryInfo(props) {
  const [Discription, setDiscription] = useState("");
  useEffect(() => {
    if (props.detail.discription) {
      setDiscription(props.detail.discription);
    }
  }, [props.detail]);
  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        wordBreak: "break-all",
        whiteSpace: "normal",
      }}
    >
      {Discription}
    </div>
  );
}

export default GalleryInfo;
