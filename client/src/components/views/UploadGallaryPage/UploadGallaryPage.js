import React, { useState } from "react";
import { Typography, Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FileUpload from "../../utils/FileUpload";

import "./UploadGallaryPage.css";

const { Title } = Typography;
const { TextArea } = Input;

function UploadGallaryPage() {
  const [Title, setTitle] = useState("");
  const [Discription, setDiscription] = useState("");
  const [Image, setImage] = useState([]);

  const titleChangeHandler = (event) => {
    setTitle(event.currentTarget.value);
  };

  const discriptionChangeHandler = (event) => {
    setDiscription(event.currentTarget.value);
  };

  const updateImages = (newImages) => {
    setImage(newImages);
  };
  return (
    <div className="wrapper">
      <Header />
      <div className="upload-content">
        <div className="upload-container">
          <h2 style={{ textAlign: "center" }} level={2}>
            업로드
          </h2>
          <Form>
            <FileUpload refreshFunction={updateImages} />
            <div className="input-title">
              <label>제목</label>
              <input
                type="text"
                onChange={titleChangeHandler}
                value={Title}
              ></input>
            </div>

            <label>내용</label>
            <div className="input-textarea">
              <TextArea
                style={{ width: "70%", height: "200px" }}
                value={Discription}
                onChange={discriptionChangeHandler}
              />
            </div>
            <Button>확인</Button>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(UploadGallaryPage);
