import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";

import "./GalleryImage.css";

function GalleryImage(props) {
  const [Images, setImages] = useState([]);
  useEffect(() => {
    if (props.detail.images && props.detail.images.length > 0) {
      let images = [];

      props.detail.images.map((item, index) => {
        images.push({
          original:
            process.env.NODE_ENV === "development"
              ? `http://localhost:5000/${item}`
              : `https://abandonness.herokuapp.com/${item}`,
          thumbnail:
            process.env.NODE_ENV === "development"
              ? `http://localhost:5000/${item}`
              : `https://abandonness.herokuapp.com/${item}`,
        });
        setImages(images);
      });
    }
  }, [props.detail]);
  return (
    <div>
      <ImageGallery items={Images} />
    </div>
  );
}

export default GalleryImage;
