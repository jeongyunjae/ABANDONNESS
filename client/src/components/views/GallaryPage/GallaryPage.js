import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Axios from "axios";
import { Col, Card, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import { UploadOutlined } from "@ant-design/icons";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./GallaryPage.css";

function GallaryPage() {
  const [Gallaries, setGallaries] = useState([]);
  useEffect(() => {
    Axios.post("/api/gallary/gallaries").then((response) => {
      if (response.data.success) {
        setGallaries(response.data.gallaryInfo);
      } else {
        alert("데이터를 가져오는데 실패하였습니다");
      }
    });
  }, []);
  console.log(Gallaries);

  const renderCards = Gallaries.map((gallary, index) => {
    return (
      <Card
        key={index}
        cover={
          <img
            style={{ width: "100%", height: "240px" }}
            src={
              process.env.NODE_ENV === "development"
                ? `http://localhost:5000/${gallary.images[0]}`
                : `https://abandonness.herokuapp.com/${gallary.images[0]}`
            }
          />
        }
      >
        <Meta />
      </Card>
    );
  });

  return (
    <div className="wrapper">
      <Header />
      <div className="gallary-content">
        <div className="gallary-container">
          {/*search*/}
          <div className="upload-link">
            <div className="link-container">
              <Link to="/gallary/upload">업로드</Link>
            </div>
          </div>
          <div className="render-card">{renderCards}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(GallaryPage);
