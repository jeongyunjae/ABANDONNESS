import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Axios from "axios";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchFeature from "./Sections/SearchFeature";

import { PlusCircleOutlined } from "@ant-design/icons";

import "./GallaryPage.css";

function GallaryPage() {
  const [Gallaries, setGallaries] = useState([]);
  const [SearchTerm, setSearchTerm] = useState("");
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(3);
  useEffect(() => {
    let body = {
      skip: Skip,
      limit: Limit,
    };
    Axios.post("/api/gallary/gallaries", body).then((response) => {
      if (response.data.success) {
        setGallaries(response.data.gallaryInfo);
      } else {
        alert("데이터를 가져오는데 실패하였습니다");
      }
    });
  }, []);

  const loadMoreHandler = () => {};

  const renderCards = Gallaries.map((gallary, index) => {
    return (
      <div className="img-wrapper">
        <img
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
          key={index}
          src={
            process.env.NODE_ENV === "development"
              ? `http://localhost:5000/${gallary.images[0]}`
              : `https://abandonness.herokuapp.com/${gallary.images[0]}`
          }
        />
        <div className="gallary-date">{gallary.date}</div>
        <div className="Gallary-title">{gallary.title}</div>
      </div>
    );
  });

  const updateSearchTerm = (updateData) => {
    setSearchTerm(updateData);
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="gallary-content">
        <div className="gallary-container">
          <div className="tit-gallary">갤러리</div>
          <div className="upload-link">
            <div className="link-container">
              <Link to="/gallary/upload">
                {
                  <PlusCircleOutlined
                    type="plus"
                    style={{ fontSize: "2rem" }}
                  />
                }
              </Link>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              margin: "1rem",
            }}
          >
            <SearchFeature refreshFunction={updateSearchTerm} />
          </div>
          <div className="render-card">
            <div className="cards-wrapper">{renderCards}</div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button onClick={loadMoreHandler}>더보기</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(GallaryPage);
