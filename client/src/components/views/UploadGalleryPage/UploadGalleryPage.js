import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FileUpload from "../../utils/FileUpload";
import "./UploadGalleryPage.css";
import { uploadGallery } from "../../../actions/upload_actions";
const { TextArea } = Input;

function UploadGalleryPage(props) {
  const dispatch = useDispatch();
  const [Title, setTitle] = useState("");
  const [Discription, setDiscription] = useState("");
  const [Images, setImages] = useState([]);
  const titleChangeHandler = (event) => {
    setTitle(event.currentTarget.value);
  };

  const discriptionChangeHandler = (event) => {
    setDiscription(event.currentTarget.value);
  };

  const updateImages = (newImages) => {
    setImages(newImages);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let date = new Date();
    let year = date.getFullYear();
    let month = new String(date.getMonth() + 1);
    let day = new String(date.getDate());
    if (month.length == 1) {
      month = "0" + month;
    }
    if (day.length == 1) {
      day = "0" + day;
    }
    let today = year + "-" + month + "-" + day;

    const body = {
      personId: props.user.userData._id,
      date: today,
      writer: props.user.userData.name,
      title: Title,
      discription: Discription,
      images: Images,
    };

    dispatch(uploadGallery(body)).then((response) => {
      if (response.payload.success) {
        alert("게시물을 저장했습니다");
        props.history.push("/gallery");
      } else {
        alert("게시물 저장에 실패했습니다.");
      }
    });
  };
  return (
    <div className="wrapper">
      <Header />
      <div className="upload-content">
        <div className="upload-container">
          <h2 style={{ textAlign: "center" }} level={2}>
            업로드
          </h2>
          <form onSubmit={submitHandler}>
            <FileUpload refreshFunction={updateImages} />
            <div style={{ clear: "none" }}>
              <div className="input-title">
                <input
                  type="text"
                  onChange={titleChangeHandler}
                  placeholder="제목"
                  value={Title}
                  required
                ></input>
              </div>
              <div className="input-textarea">
                <TextArea
                  style={{ height: "250px" }}
                  value={Discription}
                  onChange={discriptionChangeHandler}
                  placeholder="내용"
                  required
                />
              </div>
              <div className="wrapper-button">
                <button type="submit">확인</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(UploadGalleryPage);
