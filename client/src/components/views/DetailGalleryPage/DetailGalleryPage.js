import React, { useEffect, useState } from "react";
import Axios from "axios";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import GalleryInfo from "./Sections/GalleryInfo";
import GalleryImage from "./Sections/GalleryImage";

import "./DetailGalleryPage.css";

function DetailGalleryPage(props) {
  const [Gallery, setGallery] = useState({});
  const galleryId = props.match.params.galleryId;
  useEffect(() => {
    Axios.get(`/api/gallery/galleries_by_id?id=${galleryId}&type=single`).then(
      (response) => {
        if (response.data.success) {
          console.log(response.data);
          setGallery(response.data.gallery[0]);
        } else {
          alert("실패");
        }
      }
    );
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="detail-content">
        <div className="detail-container">
          <div className="detail-title">
            <div className="title-inner">{Gallery.title}</div>
          </div>
          <div className="date-writer">
            <div className="date">{Gallery.date}</div>
            <div className="writer">{Gallery.writer}</div>
          </div>
          <div className="detail-image">
            <GalleryImage detail={Gallery} />
          </div>
          <div className="detail-info">
            <GalleryInfo detail={Gallery} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailGalleryPage;
