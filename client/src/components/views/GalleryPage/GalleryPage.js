import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Axios from "axios";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchFeature from "./Sections/SearchFeature";

import { PlusCircleOutlined } from "@ant-design/icons";

import "./GalleryPage.css";

function GalleryPage() {
  const [Galleries, setGalleries] = useState([]);
  const [SearchTerm, setSearchTerm] = useState("");
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(3);
  const [PostSize, setPostSize] = useState(0);
  const [WholeDataSize, setWholeDataSize] = useState(0);
  useEffect(() => {
    Axios.post("/api/gallery/galleries").then((response) => {
      if (response.data.success) {
        setWholeDataSize(Object.keys(response.data.galleryInfo).length);
        setGalleries(response.data.galleryInfo.slice(0, Limit));
      } else {
        alert("데이터를 불러오지 못하였습니다.");
      }
    });
  }, []);

  const getData = (body) => {
    Axios.post("/api/gallery/galleries", body).then((response) => {
      if (response.data.success) {
        if (body.loadMore) {
          setGalleries([
            ...Galleries,
            ...response.data.galleryInfo.slice(0, Limit),
          ]);
          setPostSize(response.data.postSize);
        } else {
          setGalleries(response.data.galleryInfo.slice(0, Limit));
        }
      } else {
        alert("데이터를 불러오지 못하였습니다.");
      }
    });
  };

  const loadMoreHandler = () => {
    let skip = Skip + Limit;
    let body = {
      skip: skip,
      loadMore: true, //더보기 버튼을 눌렀을때 가는 request라는 정보
    };
    setSkip(skip);
    getData(body);
  };

  const renderCards = Galleries.map((gallery, index) => {
    return (
      <div key={index} className="img-wrapper">
        <a href={`/gallery/${gallery._id}`}>
          <img
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
            key={index}
            src={
              process.env.NODE_ENV === "development"
                ? `http://localhost:5000/${gallery.images[0]}`
                : `https://abandonness.herokuapp.com/${gallery.images[0]}`
            }
          />
        </a>
        <div className="gallery-date">{gallery.date}</div>
        <div className="Gallery-title">{gallery.title}</div>
      </div>
    );
  });

  const updateSearchTerm = (updateData) => {
    let body = {
      skip: 0,
      SearchTerm: updateData,
    };
    setSkip(0);
    setSearchTerm(updateData);
    getData(body);
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="gallery-content">
        <div className="gallery-container">
          <div className="tit-gallery">갤러리</div>
          <div className="upload-link">
            <div className="link-container">
              <Link to="/gallery/upload">
                {
                  <PlusCircleOutlined
                    type="plus"
                    style={{ fontSize: "2rem" }}
                  />
                }
              </Link>
            </div>
          </div>
          <div className="search-container">
            <SearchFeature refreshFunction={updateSearchTerm} />
          </div>
          <div className="render-card">
            <div className="cards-wrapper">{renderCards}</div>
          </div>
          {WholeDataSize - 3 > Skip && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "50px",
              }}
            >
              <button className="moreShow-button" onClick={loadMoreHandler}>
                더보기
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default withRouter(GalleryPage);
